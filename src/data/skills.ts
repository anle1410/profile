export type SkillGroup = {
  id: string;
  title: string;
  level: number;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    level: 80,
    description: 'Building responsive user interfaces and modern web experiences.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    level: 70,
    description: 'Designing application logic, APIs, and maintainable services.',
    items: ['Java', 'Node.js', 'REST API', 'Application Architecture'],
  },
  {
    id: 'data',
    title: 'Database & Data Engineering',
    level: 70,
    description: 'Managing data flow, queries, and database design with clarity.',
    items: ['SQL', 'Database Design', 'Data Querying', 'Data Management'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    level: 60,
    description: 'Developing Android experiences with a focus on user flow and data handling.',
    items: ['Kotlin', 'Android Studio', 'Mobile UI', 'Mobile Data Flow'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    level: 60,
    description: 'Exploring practical AI support in software workflows and real-world use cases.',
    items: ['Python', 'AI in Programming', 'Crop Disease Detection Project'],
  },
  {
    id: 'game',
    title: 'Game Development',
    level: 50,
    description: 'Applying UI thinking, interaction design, and logic-driven systems.',
    items: ['Game UI Design', 'Interaction Logic', 'User Experience'],
  },
  {
    id: 'testing',
    title: 'Software Testing / QA / QC',
    level: 70,
    description: 'Validating functionality, UI flows, and product quality with an engineering mindset.',
    items: ['Software Testing', 'Functional Testing', 'UI Testing', 'Bug Reporting'],
  },
  {
    id: 'tools',
    title: 'Tools & Environment',
    level: 80,
    description: 'Comfortable with the workflow and tools needed for modern product development.',
    items: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Linux', 'Windows'],
  },
];
