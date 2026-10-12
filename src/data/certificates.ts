export type CertificateItem = {
  name: string;
  issuer: string;
  date: string | null;
  score: string | null;
  status: 'verified' | 'pending';
  description: string;
};

export const certificates: CertificateItem[] = [
  {
    name: 'Google AI Tools / AI Usage',
    issuer: 'Google',
    date: null,
    score: null,
    status: 'pending',
    description: 'Sử dụng AI của Google. Chưa có thông tin xác minh đầy đủ về tên chứng chỉ và đơn vị cấp chính thức.',
  },
  {
    name: 'TOEIC',
    issuer: 'Thông tin chưa xác minh',
    date: null,
    score: null,
    status: 'pending',
    description: 'Chưa có điểm số hoặc ngày cấp được xác minh. Thông tin sẽ được cập nhật sau khi có chứng chỉ chính thức.',
  },
];
