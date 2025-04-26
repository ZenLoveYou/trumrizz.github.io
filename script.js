const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');
const bgMusic = document.getElementById('bgMusic');

// Đồng ý -> chuyển trang Promise
acceptBtn.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = "promise.html";
  }, 300);
});

// Từ chối -> nút chạy khắp nơi
declineBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - declineBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - declineBtn.offsetHeight);
  declineBtn.style.position = 'absolute';
  declineBtn.style.left = `${x}px`;
  declineBtn.style.top = `${y}px`;
  declineBtn.style.transition = '0.3s';
  declineBtn.style.transform = `rotate(${Math.random()*360}deg)`;
});

// Tạo trái tim bay
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.getElementById('hearts').appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);

// Auto play nhạc
setTimeout(() => {
  bgMusic.play().catch(()=>{});
}, 1000);
