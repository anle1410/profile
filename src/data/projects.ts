export type ProjectDetail = {
  overview: string;
  features: string[];
  challenges: string[];
  lessons: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  tags: string[];
  role: string;
  features: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  status: 'available' | 'coming-soon';
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    id: 'online-shopping',
    title: 'Online Shopping / E-commerce Website',
    category: 'WEB E-COMMERCE',
    summary:
      'Website bán hàng trực tuyến với giao diện sản phẩm, danh mục, giỏ hàng và quy trình mua hàng. Tập trung vào tổ chức dữ liệu, trải nghiệm người dùng và cấu trúc ứng dụng.',
    image: '/images/project-ecommerce.svg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend & product structure',
    features: ['Danh mục sản phẩm', 'Giỏ hàng', 'UI/UX hợp lý', 'Lưu trữ dữ liệu đơn giản'],
    githubUrl: null,
    demoUrl: null,
    status: 'coming-soon',
    detail: {
      overview:
        'Dự án này tập trung vào việc xây dựng trải nghiệm mua sắm trực tuyến rõ ràng, dễ theo dõi và thân thiện với người dùng. Mục tiêu là đảm bảo UI phân cấp thông tin tốt và quy trình mua hàng được tổ chức hiệu quả.',
      features: ['Tổ chức danh mục sản phẩm', 'Giao diện giỏ hàng', 'Cấu trúc dữ liệu rõ ràng', 'UX được tối ưu cho người dùng'],
      challenges: ['Cân bằng giữa tính thẩm mỹ và tính khả dụng', 'Sắp xếp dữ liệu để dễ mở rộng', 'Tối ưu trải nghiệm trên mobile'],
      lessons: ['Đặt UX lên trước khi triển khai chi tiết', 'Kiến trúc dữ liệu rất quan trọng với hệ thống bán hàng', 'Tối ưu trải nghiệm giúp nâng cao khả năng tương tác'],
    },
  },
  {
    id: 'agrivision',
    title: 'AgriVision — Crop Disease Detection',
    category: 'AI APPLICATION',
    summary:
      'Ứng dụng hỗ trợ phát hiện bệnh cây trồng thông qua hình ảnh, hướng đến việc ứng dụng trí tuệ nhân tạo vào lĩnh vực nông nghiệp.',
    image: '/images/project-agrivision.svg',
    tags: ['Python', 'AI/ML'],
    role: 'AI experiment & project exploration',
    features: ['Xử lý ảnh', 'Phân tích dấu hiệu bệnh', 'Khả năng mở rộng cho mô hình AI'],
    githubUrl: null,
    demoUrl: null,
    status: 'coming-soon',
    detail: {
      overview:
        'AgriVision khám phá cách AI có thể hỗ trợ nhận diện triệu chứng bệnh trên cây trồng thông qua hình ảnh. Đây là dự án thể hiện khả năng kết hợp học thuật với ứng dụng thực tiễn.',
      features: ['Phân tích hình ảnh', 'Tạo luồng dữ liệu cho mô hình', 'Công cụ hỗ trợ nhận diện bệnh cây'],
      challenges: ['Chọn mô hình phù hợp cho dữ liệu hình ảnh', 'Đảm bảo độ tin cậy của kết quả', 'Biểu diễn kết quả rõ ràng cho người dùng'],
      lessons: ['AI cần đi kèm với xử lý dữ liệu hợp lý', 'Hiệu quả không đến từ công nghệ đơn lẻ mà từ hệ thống', 'Sự rõ ràng trong luồng dữ liệu rất quan trọng'],
    },
  },
  {
    id: 'game-interface',
    title: 'Interactive Game Interface',
    category: 'GAME UI / GAME INTERFACE',
    summary:
      'Dự án giao diện game tập trung vào thiết kế trực quan, bố cục, trải nghiệm người dùng và khả năng tương tác.',
    image: '/images/project-game.svg',
    tags: ['UI/UX', 'Interaction Design'],
    role: 'Interface design & interaction flow',
    features: ['Bố cục giao diện game', 'Hệ thống tương tác', 'Cảm giác hiện đại và súc tích'],
    githubUrl: null,
    demoUrl: null,
    status: 'coming-soon',
    detail: {
      overview:
        'Dự án này tập trung vào cách thiết kế giao diện game tạo cảm giác rõ ràng, chuyên nghiệp và dễ tương tác. Mục tiêu là thể hiện ý thức về trải nghiệm người chơi và khả năng tạo ra bố cục có chiều sâu.',
      features: ['Tạo thẩm mỹ game mạnh mẽ', 'Bố cục rõ ràng', 'Tương tác và feedback trực quan'],
      challenges: ['Giữ sự sạch sẽ nhưng vẫn tạo cảm giác năng động', 'Tối ưu thông tin không làm người dùng quá tải', 'Duy trì tính nhất quán trong giao diện'],
      lessons: ['UI game phải cân bằng giữa hiệu ứng và khả năng đọc', 'Tương tác tốt giúp người chơi tập trung hơn', 'Một bố cục rõ ràng nâng cao trải nghiệm tổng thể'],
    },
  },
  {
    id: 'mouse-camera-gestures',
    title: 'Interactive Control — Mouse & Camera Gestures',
    category: 'INTERACTION RESEARCH',
    summary:
      'Các bài thực hành tương tác thông qua thao tác chuột và cử chỉ được nhận diện bằng camera, thể hiện khả năng thử nghiệm phương thức điều khiển giao diện và tương tác người dùng.',
    image: '/images/project-gesture.svg',
    tags: ['JavaScript', 'UI Interaction'],
    role: 'Interaction prototype & interface experimentation',
    features: ['Tương tác chuột', 'Cử chỉ camera', 'Thử nghiệm giao diện nâng cao'],
    githubUrl: null,
    demoUrl: null,
    status: 'coming-soon',
    detail: {
      overview:
        'Dự án thể hiện khả năng thử nghiệm các kiểu điều khiển giao diện khác nhau, từ thao tác chuột đến cử chỉ camera, nhằm đánh giá cách người dùng tương tác với hệ thống và cách tối ưu trải nghiệm.',
      features: ['Thử nghiệm điều khiển bằng chuột', 'Khám phá cử chỉ camera', 'Phát hiện nhu cầu tương tác rõ ràng'],
      challenges: ['Kiểm soát độ chính xác của cử chỉ', 'Đảm bảo phản hồi nhanh', 'Tạo trải nghiệm tương tác tự nhiên'],
      lessons: ['Phản hồi tức thì là yếu tố quan trọng', 'Tương tác cần vừa sáng tạo vừa dễ hiểu', 'Việc thử nghiệm sẽ giúp tìm ra cách phù hợp nhất'],
    },
  },
];
