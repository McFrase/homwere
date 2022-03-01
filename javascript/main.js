window.onload = function () {
  const bar = document.querySelector('.bars');
  const navContainer = document.querySelector('.navContainer');
  const navLinks = document.querySelectorAll('.nav-item');

  bar.addEventListener('click', function () {
    this.classList.toggle('active');

    if (this.classList.contains('active')) {
      gsap.to(navContainer, {
        duration: 1,
        right: '0%',
        // ease: "bounce",
      });
    } else {
      gsap.to('.navContainer', {
        duration: 1,
        right: '100%',
      });
    }
  });

  navLinks.addEventListener.forEach(function () {
    if (bar.classList.contains('active')) {
      bar.classList.remove('active');
    }
  });
};

var countDate = new Date('Mar 15, 2022').getTime();

function newSite() {
  var now = new Date().getTime();
  let gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function () {
  newSite();
}, 1000);
