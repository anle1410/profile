export type SocialLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const profile = {
  name: 'Lê Phú An',
  role: 'FULL-STACK DEVELOPER',
  tagline: 'Web • Mobile • AI • Quality Engineering • Data • Game',
  shortIntro:
    'Là người có tinh thần trách nhiệm, chủ động học hỏi và luôn hướng đến sự phát triển bản thân. Tôi mong muốn vận dụng kiến thức, trau dồi kỹ năng và tích lũy kinh nghiệm thực tế trong môi trường làm việc chuyên nghiệp.',
  aboutParagraphs: [
    'Là sinh viên chuyên ngành Công nghệ thông tin, tôi đã tích lũy nền tảng kỹ thuật vững chắc thông qua việc học tập và thực hành phát triển ứng dụng Web & Mobile, kết hợp tư duy kiểm thử (Testing) chỉn chu để đảm bảo chất lượng sản phẩm.',
    'Tôi có định hướng phát triển trở thành một Full-stack Developer, chủ động ứng dụng các công cụ AI vào quy trình lập trình để tối ưu hiệu suất công việc. Thế mạnh của tôi nằm ở tư duy logic, khả năng tự học nhanh công nghệ mới, sự tỉ mỉ khi thiết kế luồng dữ liệu / UI-UX và tinh thần trách nhiệm cao đối với mã nguồn.',
    'Mục tiêu ngắn hạn của tôi là ứng tuyển vị trí Thực tập sinh / Fresher Developer để cọ xát với các dự án thực tế, tích lũy kinh nghiệm thực chiến và đóng góp giá trị cho sản phẩm của công ty.',
  ],
  highlightTags: ['Problem Solving', 'Continuous Learning', 'Clean Code', 'Quality Mindset', 'AI-assisted Development'],
  careerGoals: [
    'Full-stack Developer Intern / Fresher',
    'Web Developer',
    'Mobile Developer',
    'AI Developer Intern',
    'Software Testing / QA Intern',
    'Data Engineering Intern',
    'Game Developer Intern',
  ],
  education: 'Đại học Văn Hiến',
  major: 'Công nghệ phần mềm',
  status: 'Sinh viên năm 4, định hướng tìm kiếm cơ hội thực tập và Fresher.',
  email: 'anle64437@gmail.com',
  phone: '0868264437',
  githubUrl: 'https://github.com/anle1410',
  linkedInUrl: 'https://www.linkedin.com/in/l%C3%AAph%C3%BAan',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Career Goal', href: '#career-goal' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/anle1410', ariaLabel: 'Visit GitHub profile' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/l%C3%AAph%C3%BAan', ariaLabel: 'Visit LinkedIn profile' },
  { label: 'Email', href: 'mailto:anle64437@gmail.com', ariaLabel: 'Send email' },
];
