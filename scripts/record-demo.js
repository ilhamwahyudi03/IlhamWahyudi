const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

async function smoothScrollTo(page, targetY, durationMs = 1500) {
  const startY = await page.evaluate(() => window.scrollY);
  const diff = targetY - startY;
  const frames = Math.max(20, Math.floor(durationMs / 20));
  for (let i = 1; i <= frames; i++) {
    const t = i / frames;
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const currentY = startY + diff * ease;
    await page.evaluate((y) => window.scrollTo(0, y), currentY);
    await page.waitForTimeout(20);
  }
}

async function moveMouseSmoothly(page, startX, startY, endX, endY, steps = 25) {
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = startX + (endX - startX) * t;
    const y = startY + (endY - startY) * t;
    await page.mouse.move(x, y);
    await page.waitForTimeout(15);
  }
}

(async () => {
  const outputDir = path.resolve(__dirname, '../public/demo-video');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Launching Chromium for video recording...');
  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: {
      dir: outputDir,
      size: { width: 1920, height: 1080 },
    },
  });

  const page = await context.newPage();
  console.log('Navigating to http://localhost:3000 ...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });

  // Wait for initial animations (TechCanvas, hero text reveal)
  console.log('Scene 1: Hero Section');
  await page.waitForTimeout(2000);
  await moveMouseSmoothly(page, 400, 300, 960, 450, 30);
  await page.waitForTimeout(1000);
  await moveMouseSmoothly(page, 960, 450, 1400, 350, 30);
  await page.waitForTimeout(1000);

  // Scene 2: Toggle Theme to Light and back to Dark
  console.log('Scene 2: Theme Toggle');
  const themeBtn = page.locator('button[aria-label="Toggle theme"]');
  if (await themeBtn.isVisible()) {
    const box = await themeBtn.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 15 });
      await page.waitForTimeout(400);
      await themeBtn.click();
      console.log('Toggled theme to light');
      await page.waitForTimeout(2000);
      await themeBtn.click();
      console.log('Toggled theme back to dark');
      await page.waitForTimeout(1500);
    }
  }

  // Scene 3: Scroll to About Section
  console.log('Scene 3: About Section');
  const aboutSec = page.locator('#about');
  if (await aboutSec.isVisible()) {
    const target = await page.evaluate(() => {
      const el = document.getElementById('about');
      return el ? el.offsetTop - 80 : 800;
    });
    await smoothScrollTo(page, target, 1800);
    await page.waitForTimeout(2000);
    await moveMouseSmoothly(page, 500, 500, 1100, 550, 25);
  }

  // Scene 4: Scroll to Bento Projects
  console.log('Scene 4: Bento Projects');
  const projTarget = await page.evaluate(() => {
    const el = document.getElementById('projects');
    return el ? el.offsetTop - 70 : 1600;
  });
  await smoothScrollTo(page, projTarget, 2000);
  await page.waitForTimeout(1500);

  // Hover over project cards
  const projectCards = page.locator('#projects .group');
  const count = await projectCards.count();
  console.log(`Found ${count} project cards`);
  for (let i = 0; i < Math.min(count, 3); i++) {
    const card = projectCards.nth(i);
    const box = await card.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 20 });
      await page.waitForTimeout(1400);
    }
  }

  // Scene 5: Scroll to Skills Section
  console.log('Scene 5: Skills Section');
  const skillsTarget = await page.evaluate(() => {
    const el = document.getElementById('skills');
    return el ? el.offsetTop - 70 : 2500;
  });
  await smoothScrollTo(page, skillsTarget, 2000);
  await page.waitForTimeout(2000);

  // Scene 6: Scroll to Experience Section
  console.log('Scene 6: Experience Section');
  const expTarget = await page.evaluate(() => {
    const el = document.getElementById('experience');
    return el ? el.offsetTop - 70 : 3300;
  });
  await smoothScrollTo(page, expTarget, 2000);
  await page.waitForTimeout(2500);

  // Scene 7: Scroll to Contact Section
  console.log('Scene 7: Contact Section');
  const contactTarget = await page.evaluate(() => {
    const el = document.getElementById('contact');
    return el ? el.offsetTop - 70 : 4200;
  });
  await smoothScrollTo(page, contactTarget, 2000);
  await page.waitForTimeout(2000);

  // Scene 8: Open AI Chatbot Assistant
  console.log('Scene 8: AI Chatbot Assistant');
  const botBtn = page.locator('button[aria-label="Toggle AI assistant"]');
  if (await botBtn.isVisible()) {
    const box = await botBtn.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 20 });
      await page.waitForTimeout(500);
      await botBtn.click();
      console.log('Opened AI Chatbot widget');
      await page.waitForTimeout(1500);

      // Focus input and type simulated question
      const botInput = page.locator('form input[placeholder*="Tanya"], form input[placeholder*="Ask"]').first();
      if (await botInput.isVisible()) {
        await botInput.click();
        const demoText = "Halo! Ceritakan pengalamanmu dalam Next.js & Fullstack Engineering.";
        for (const char of demoText) {
          await page.keyboard.type(char, { delay: 45 });
        }
        await page.waitForTimeout(2000);
      }
    }
  }

  // Scene 9: Smooth return to top
  console.log('Scene 9: Scroll to Top Closing');
  await smoothScrollTo(page, 0, 2500);
  await page.waitForTimeout(2000);

  console.log('Closing page and saving video...');
  const videoObj = page.video();
  await context.close();
  await browser.close();

  if (videoObj) {
    const rawVideoPath = await videoObj.path();
    console.log('Raw video saved to:', rawVideoPath);
    const targetWebm = path.join(outputDir, 'portfolio-demo.webm');
    const targetMp4 = path.join(outputDir, 'portfolio-demo.mp4');

    if (fs.existsSync(targetWebm)) fs.unlinkSync(targetWebm);
    if (fs.existsSync(targetMp4)) fs.unlinkSync(targetMp4);

    fs.copyFileSync(rawVideoPath, targetWebm);
    console.log('WebM video ready at:', targetWebm);

    // Convert to MP4 using Playwright ffmpeg
    const ffmpegPath = 'C:\\Users\\Ilham Wahyudi\\AppData\\Local\\ms-playwright\\ffmpeg-1013\\ffmpeg-win64.exe';
    if (fs.existsSync(ffmpegPath)) {
      console.log('Transcoding to MP4 with FFmpeg...');
      try {
        execSync(`"${ffmpegPath}" -y -i "${targetWebm}" -c:v libx264 -pix_fmt yuv420p -preset fast -crf 22 "${targetMp4}"`, { stdio: 'inherit' });
        console.log('MP4 video ready at:', targetMp4);
      } catch (err) {
        console.error('Transcode error:', err.message);
      }
    }
  }

  console.log('Demo video creation complete!');
})();
