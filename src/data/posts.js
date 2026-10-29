// Dữ liệu mẫu. Sau này thay bằng database (MongoDB, MySQL...).
const posts = [
  {
    slug: 'hoc-nodejs-tu-con-so-0',
    title: 'Học Node.js từ con số 0: lộ trình 30 ngày',
    excerpt: 'Từ cài đặt, module, npm đến xây dựng REST API hoàn chỉnh — lộ trình chi tiết cho người mới bắt đầu.',
    category: 'Node.js',
    author: 'Nam Phạm',
    date: '28/10/2026',
    readTime: 8,
    views: 1240,
    image: 'https://picsum.photos/seed/nodejs/800/500',
    featured: true,
  },
  {
    slug: 'express-co-ban',
    title: 'Express cơ bản: route, middleware và template engine',
    excerpt: 'Hiểu cách Express xử lý một request qua chuỗi middleware và render giao diện bằng Handlebars.',
    category: 'Express',
    author: 'Nam Phạm',
    date: '25/10/2026',
    readTime: 6,
    views: 856,
    image: 'https://picsum.photos/seed/express/800/500',
  },
  {
    slug: 'fetch-api-va-async-await',
    title: 'Fetch API và async/await: gọi API không còn rối',
    excerpt: 'So sánh .then() với async/await, xử lý lỗi HTTP đúng cách và những lỗi người mới hay mắc.',
    category: 'JavaScript',
    author: 'Lan Trần',
    date: '22/10/2026',
    readTime: 5,
    views: 642,
    image: 'https://picsum.photos/seed/fetch/800/500',
  },
  {
    slug: 'jwt-dang-nhap-an-toan',
    title: 'Đăng nhập an toàn với JWT và bcrypt',
    excerpt: 'Vì sao không bao giờ lưu mật khẩu dạng thô, và token được ký, kiểm tra như thế nào.',
    category: 'Bảo mật',
    author: 'Minh Lê',
    date: '19/10/2026',
    readTime: 7,
    views: 1530,
    image: 'https://picsum.photos/seed/jwt/800/500',
  },
  {
    slug: 'microservices-cho-nguoi-moi',
    title: 'Microservices cho người mới: khi nào nên tách?',
    excerpt: 'API gateway, dữ liệu riêng cho từng service và những cái bẫy khi chia service quá sớm.',
    category: 'Kiến trúc',
    author: 'Nam Phạm',
    date: '15/10/2026',
    readTime: 10,
    views: 978,
    image: 'https://picsum.photos/seed/micro/800/500',
  },
  {
    slug: 'docker-compose-trong-10-phut',
    title: 'Docker Compose trong 10 phút',
    excerpt: 'Đóng gói từng service thành image và chạy cả hệ thống chỉ với một lệnh.',
    category: 'DevOps',
    author: 'Lan Trần',
    date: '10/10/2026',
    readTime: 9,
    views: 711,
    image: 'https://picsum.photos/seed/docker/800/500',
  },
  {
    slug: 'css-grid-va-flexbox',
    title: 'CSS Grid và Flexbox: dùng cái nào lúc nào?',
    excerpt: 'Flexbox cho một chiều, Grid cho hai chiều — kèm các ví dụ bố cục thường gặp.',
    category: 'CSS',
    author: 'Minh Lê',
    date: '05/10/2026',
    readTime: 4,
    views: 523,
    image: 'https://picsum.photos/seed/css/800/500',
  },
];

// Đếm số bài theo chuyên mục: [{ name, count }]
function getCategories() {
  const counts = {};
  for (const p of posts) counts[p.category] = (counts[p.category] || 0) + 1;
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

// Top bài nhiều lượt xem nhất
function getPopular(limit = 4) {
  return [...posts].sort((a, b) => b.views - a.views).slice(0, limit);
}

module.exports = { posts, getCategories, getPopular };
