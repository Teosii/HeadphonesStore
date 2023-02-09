const navSlider = () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    hamburger.classList.toggle("toggle");
  });
};
navSlider();


function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var TimeElapsed = currentTime - startTime;
    var run = ease(TimeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (TimeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var section = document.querySelector(".section2");
var section2 = document.querySelector(".content");
section.addEventListener("click", function () {
  smoothScroll(".content", 1000);
});

let cartIcon = document.getElementById("cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.getElementById("close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};

var modalButton = document.querySelector(".logIn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".fa-xmark");

modalButton.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

let username_input = document.querySelector(".username");
let email_input = document.querySelector(".email");
let password_input = document.querySelector(".password");
let confirm_password = document.querySelector(".confirmPassword");
let loginBtn = document.querySelector(".modal-login");
loginBtn.addEventListener("click", logIn);
function logIn() {
  localStorage.setItem("username", username_input.value);
  localStorage.setItem("email", email_input.value);
  if (password_input.value == confirm_password.value) {
    if (!password_input.value.includes("!")) {
      alert("Include special characters");
    } else {
      localStorage.setItem("password", password_input.value);
    }
  } else {
    alert("Both password should be the same");
  }
}

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var TimeElapsed = currentTime - startTime;
    var run = ease(TimeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (TimeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var section = document.querySelector(".section3");
var section2 = document.querySelector(".slideshow-container");
section.addEventListener("click", function () {
  smoothScroll(".slideshow-container", 1000);
});


var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3000);
