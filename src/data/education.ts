export type LearningStage = {
  period: string;
  title: string;
  items: string[];
};

export const learningJourney: LearningStage[] = [
  {
    period: 'LỚP 12',
    title: 'Nền tảng Web',
    items: ['HTML', 'CSS', 'JavaScript', 'Làm quen với xây dựng website'],
  },
  {
    period: 'NĂM 1 ĐẠI HỌC',
    title: 'Lập trình cơ bản',
    items: ['Java', 'Thuật toán và giải thuật', 'Rèn luyện tư duy lập trình'],
  },
  {
    period: 'NĂM 2 ĐẠI HỌC',
    title: 'Mở rộng công nghệ',
    items: ['C++', 'SQL', 'React', 'Python', 'Kotlin'],
  },
  {
    period: 'NĂM 3 ĐẠI HỌC',
    title: 'Phát triển ứng dụng',
    items: ['Mobile Development', 'Linux', 'Windows', 'Phần mềm và phát triển ứng dụng', 'Trí tuệ nhân tạo', 'Web Development', 'Lập trình hướng đối tượng (OOP)', 'Quản lý dự án'],
  },
  {
    period: 'NĂM 4 ĐẠI HỌC',
    title: 'Thực tập và hoàn thiện',
    items: ['Định hướng thực tập', 'Hoàn thiện dự án', 'Nâng cao kỹ năng chuyên môn', 'Chuẩn bị ứng tuyển vị trí Intern/Fresher'],
  },
];
