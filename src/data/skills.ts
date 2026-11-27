export interface SkillGroup {
  category: string;
  categoryId: string;
  icon: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Fullstack & Web',
    categoryId: 'Fullstack & Web',
    icon: '🖥️',
    items: [
      'Laravel (PHP)',
      'Vue.js',
      'React.js / Next.js',
      'Node.js',
      'Tailwind CSS',
      'Bootstrap',
      'Leaflet.js',
    ],
  },
  {
    category: 'Core Languages',
    categoryId: 'Bahasa Pemrograman',
    icon: '⚡',
    items: [
      'Python',
      'JavaScript',
      'PHP',
      'C',
      'Hack',
      'SQL (PostgreSQL & MySQL)',
    ],
  },
  {
    category: 'Data & Machine Learning',
    categoryId: 'Data & Machine Learning',
    icon: '🧠',
    items: [
      'Hadoop (HDFS)',
      'Apache Hive',
      'Machine Learning (LSTM)',
      'Deep Learning Frameworks',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    category: 'Tools, Design & AI',
    categoryId: 'Tools, Desain & AI',
    icon: '🛠️',
    items: [
      'Git & GitHub',
      'Figma (UI/UX Design)',
      'AI-Assisted Coding Tools',
      'Canva',
      'REST API Integration',
      'Black-Box Testing',
    ],
  },
];
