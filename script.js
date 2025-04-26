const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
const bgMusic = document.getElementById('bgMusic');

// Bấm "Đồng ý" -> Chuyển trang hoặc hiện thông điệp
acceptBtn.addEventListener('click', () => {
  window.location.href = "promise.html"; // Chuyển tới 1 trang promise.html (hứa hẹn)
});

// Bấm "Từ chối" -> Nút chạy lung tung
declineBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - declineBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - declineBtn.offsetHeight);
  declineBtn.style.position = 'absolute';
  declineBtn.style.left = `${x}px`;
  declineBtn.style.top = `${y}px`;
});

// Đảm bảo nhạc phát tự động
setTimeout(() => {
  bgMusic.play().catch(() => {});
}, 1000);
