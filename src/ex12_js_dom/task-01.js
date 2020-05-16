const images = [
  'https://img.itch.zone/aW1nLzI3MjAzMzUuanBn/original/PKJHwd.jpg',
  'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  'https://images.wallpaperscraft.ru/image/ozero_gory_derevia_122294_800x600.jpg'
];

let currSlide = 0;

const setSlide = (slide) => {
  currSlide = slide;
  document.getElementById('slider-container').src = images[currSlide] || images[0];
};

const move = (next) => {
  let slide = currSlide + (next ? 1 : -1);
  if (slide > images.length - 1) {
    slide = 0;
  }
  if (slide < 0) {
    slide = images.length - 1;
  }
  setSlide(slide);
};

window.onload = document.getElementById('slider-container').src = images[0];

document.onkeydown = (ev) => {
  const arrowRight = 39;
  const arrowLeft = 37;
  if (ev.keyCode === arrowLeft) {
    move();
  }
  if (ev.keyCode === arrowRight) {
    move(true);
  }
};
