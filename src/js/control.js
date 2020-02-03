var animationsOn = true;
var animationToggle = document.getElementById('animationToggle');

animationToggle.onclick = function() {

  if (animationToggle.classList.contains('animations-enabled')) {
    animationToggle.classList.remove('animations-enabled');
    animationToggle.classList.add('animations-disabled');
    animationToggle.innerHTML = 'Enable animations';
    animationState.innerText = "disabled";
    animationsOn = false;
  }
  else {
    animationToggle.classList.remove('animations-disabled');
    animationToggle.classList.add('animations-enabled');
    animationToggle.innerHTML = 'Disable animations';
    animationState.innerText = "enabled";
    animationsOn = true;

    animateSnow(snow);
  }
}
