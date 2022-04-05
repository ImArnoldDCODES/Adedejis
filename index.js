var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// nav menu state (jquery)
$(".nav-mobile-menu").on("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("nav-mobile-menu--active");
});


$(".nav-mobile-menu").on("click", function () {
  $(".mobile").toggleClass('add-height');
});

// const menu = document.querySelector('.container');
// let menuState = false;
// menu.addEventListener('click', showMenu);
// function showMenu(){
//     if(!menuState)
//     {
//         menu.classList.add("is-active");
//         document.querySelector(".navbar ul").classList.add("open");
//         menuState = true;
//     }
//     else
//     {
//         menu.classList.remove("is-active");
//         document.querySelector(".navbar ul").classList.remove("open");
//         menuState = false;
//     }
// }
