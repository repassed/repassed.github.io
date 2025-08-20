const items = document.querySelectorAll('.menu-item2');

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach((el, i) => {
        el.style.transform = '';
        el.style.zIndex = '';
    });
    items.forEach((el, i) => {
        const offset = i - index;
      if (i < index) {
        el.style.transform = 'translateX(0px) skewX(-20deg)';
        el.style.zIndex = '${900 + i}';
      } else if (i === index) {
        el.style.transform = 'translateX(100px) scale(1.05) skewX(-20deg)';
        el.style.zIndex = '1000';
      } else {
        const shift = (i - index + 1) * 150;
        el.style.transform = `translateX(${shift}px) skewX(-20deg)`;
        el.style.zIndex = `${999-i}`;
      }
    });
  });
});