var animationsOn = true;
var animationToggle = document.getElementById('animationToggle');
var body = document.getElementById('climate-change');
var aosElements = document.getElementsByClassName('aos-init');

animationToggle.onclick = function() {

  if (animationToggle.classList.contains('animations-enabled')) {
    animationsOn = false;

    animationToggle.classList.remove('animations-enabled');
    animationToggle.classList.add('animations-disabled');

    animationToggle.innerHTML = 'Enable animations';
    animationState.innerText = "disabled";

    body.classList.add('animations-off');
    body.classList.remove('animations-on');

    for (each of aosElements) {
      each.removeAttribute('data-aos');
    }
  }

  else {
    window.location.reload();
  }
}

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  var halfway = window.innerHeight / 2;
  return (
    bounding.top <= halfway
  );
};

/* trigger ice core animation */

var ice_core = document.getElementById('ice-core');
window.addEventListener('scroll', function (event) {
  if (isInViewport(ice_core)) {
    ice_core.classList.add('animate');
  }
}, false);
