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
