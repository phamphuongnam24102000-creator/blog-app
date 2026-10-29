// Các helper dùng trong file .hbs
module.exports = {
  // {{#if (eq a b)}} – so sánh 2 giá trị trong template
  eq: (a, b) => a === b,
  // {{formatNumber 1240}} → "1.240"
  formatNumber: n => Number(n).toLocaleString('vi-VN'),
  year: () => new Date().getFullYear(),
  // {{inc @index}} → số thứ tự bắt đầu từ 1 (vì @index bắt đầu từ 0)
  inc: n => Number(n) + 1,
  // {{initial "Nam"}} → "N" (chữ cái cho avatar)
  initial: s => String(s || '?').trim().charAt(0).toUpperCase(),
};
