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
var loginBtn = document.querySelector(".modal-login");

modalButton.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});
loginBtn.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function changeImage(fileName) {
  let img = document.querySelector(".headphone");
  img.setAttribute("src", fileName);
}
let ngjyra;
let color = document.getElementById("color");
let headphone1 = document.getElementById("black-headphones");
let headphone2 = document.getElementById("white-headphones");
let headphone3 = document.getElementById("gold-headphones");
headphone1.addEventListener("click", () => {
  color.innerText = "Color: Black";
  ngjyra = 1;
});
headphone2.addEventListener("click", () => {
  color.innerText = "Color: White";
  ngjyra = 2;
});
headphone3.addEventListener("click", () => {
  color.innerText = "Color: Gold";
  ngjyra = 3;
});

let username_input = document.querySelector(".username");
let email_input = document.querySelector(".email");
let password_input = document.querySelector(".password");
let confirm_password = document.querySelector(".confirmPassword");
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

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}
function buyButtonClicked() {
  alert("Your order is on the way!");
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg;
  if (ngjyra == 1) {
    productImg = "/image/headphone1.png";
  } else if (ngjyra == 2) {
    productImg = "/image/headphone2.png";
  } else if (ngjyra == 3) {
    productImg = "/image/headphone3.png";
  }

  addProductToCart(title, price, productImg);
  updateTotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to your cart");
      return;
    }
  }
  var cartBoxContent = `     <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class="fa-regular fa-trash-can cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

function updateTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
