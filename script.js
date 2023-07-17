const slider = document.querySelector('.slider');

// 設定輪播間隔時間（毫秒）
const interval = 5000;

// 自動切換輪播圖片
setInterval(() => {
  const currentTranslate = parseInt(getComputedStyle(slider).getPropertyValue('transform').split(',')[4]);
  const slideWidth = slider.clientWidth;
  const numSlides = slider.children.length;

  // 計算下一個輪播位置
  const nextTranslate = currentTranslate - slideWidth;

  // 切換到下一個輪播位置
  slider.style.transform = `translateX(${nextTranslate}px)`;

  // 如果已經到最後一張圖片，返回第一張
  if (Math.abs(nextTranslate) >= slideWidth * (numSlides - 1)) {
    setTimeout(() => {
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
      setTimeout(() => {
        slider.style.transition = '';
      });
    }, 1000);
  }
}, interval);