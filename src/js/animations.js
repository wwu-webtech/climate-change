const loadAnimation = anime({
  targets: '.fade-in',
  opacity: 1,
  easing: 'easeInOutSine',
  autoplay: true,
  delay: anime.stagger(1000),
})

const scrollAnimation = anime({
  targets: '.logo',
  translateY: '-242px',
  elasticity: 200,
  easing: 'easeInOutSine',
  autoplay: false,
  duration: 1,
});

function getScrollPercent() {
  const scrollTop = window.scrollY;
  const docHeight = document.body.offsetHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = ((scrollTop) / (docHeight - winHeight)) * 100;

  return scrollPercent;
}

document.addEventListener('scroll', () => {
  scrollAnimation.seek((getScrollPercent() / 100) * scrollAnimation.duration);
})
