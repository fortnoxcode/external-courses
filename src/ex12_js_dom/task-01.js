const images = [
  'https://img.itch.zone/aW1nLzI3MjAzMzUuanBn/original/PKJHwd.jpg',
  'https://www.anapa.vip/upload/iblock/18f/18f6574d3c37e4f3b33e66f737560f1b.jpg',
  'https://images.wallpaperscraft.ru/image/ozero_gory_derevia_122294_800x600.jpg'
];

let currSlide = 0;

const setSlide = (index) => {
  if (typeof index === 'string' && (index === '+' || index === '-')) {
    let slide = currSlide + (index === '+' ? 1 : -1);
    if (slide > images.length - 1) {
      slide = 0;
    }
    if (slide < 0) {
      slide = images.length - 1;
    }
    setSlide(slide);
  }
  if (typeof index === 'number') {
    currSlide = index;
    document.getElementById('slider-container').src = images[currSlide] || images[0];
  }
};

document.onkeydown = (k) => {
  k = k || window.event;
  if (k.keyCode === 37) {
    setSlide('+');
  }
  if (k.keyCode === 39) {
    setSlide('-');
  }
};
