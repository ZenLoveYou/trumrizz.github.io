// Story gõ từng chữ
const storyText = "Tớ thích cậu từ lâu lắm rồi... Ngày nào cũng nghĩ về cậu... Cậu là người duy nhất khiến tớ cười như một đứa ngốc. Khánh Hà à, làm người yêu tớ nhaaaa 🥺❤️";
const storyEl = document.getElementById('story');
let index = 0;

function typeStory() {
  if (index < storyText.length) {
    storyEl.innerHTML += storyText.charAt(index);
    index++;
    setTimeout(typeStory, 50);
  }
}
typeStory();

// Music auto play
setTimeout(() => {
  document.getElementById('bgMusic').play().catch(() => {});
}, 1000);

// Tạo tim bay
setInterval(() => {
  let heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// Nút "Không thể từ chối" né
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
  noBtn.style.top = Math.random() * 80 + 'vh';
  noBtn.style.left = Math.random() * 80 + 'vw';
  noBtn.style.position = 'absolute';
});

// Nút "Đồng ý"
document.getElementById('yesBtn').onclick = () => {
  window.location.href = "promise.html";
}
