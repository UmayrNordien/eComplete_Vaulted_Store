//  CART
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// OPEN THE CART
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// CLOSE THE CART
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// READY - ensure that the ready() function is called only when the initial HTML document has been fully loaded (parsed)
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // Reomve Items From Cart
  var reomveCartButtons = document.getElementsByClassName("cart-remove");
  console.log(reomveCartButtons);
  for (var i = 0; i < reomveCartButtons.length; i++) {
    var button = reomveCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add To Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // Checkout Button Work
  document
    .getElementsByClassName("btn-checkout")[0]
    .addEventListener("click", checkoutButtonClicked);
}
// Checkout Button
function checkoutButtonClicked() {
  window.location.href = "./checkout.html"; /* redirect to checout to complete shipping form */
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// Reomve Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
// Add To cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- Remove Cart -->
                        <i class='bx bxs-trash cart-remove' ></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

/*
use the replace method to remove the R symbol from the innerText of the price element before 
using parseFloat to extract the numerical value. 
We then multiply the price and quantity to get the total price 
*/
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = priceElement.innerText.replace("R", "");
    var quantity = quantityElement.value;
    total = total + parseFloat(price) * quantity;
  }

  // If price contains some cents value, round to two decimal places
  total = Math.round(total * 100) / 100;

  // Replace $ symbol with R symbol when updating the total price element
  document.getElementsByClassName("total-price")[0].innerText = "R" + total;
}

function replaceCurrencySymbol() {
  var prices = document.getElementsByClassName("price");
  for (var i = 0; i < prices.length; i++) {
    var price = prices[i].innerText;
    price = price.replace("$", "R");
    prices[i].innerText = price;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  replaceCurrencySymbol();
});

const searchInput = document.getElementById('filter-search');
const productBoxes = document.querySelectorAll('.product-box');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  productBoxes.forEach(box => {
    const title = box.querySelector('.product-title').textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
});

// const parallaxBg = document.querySelector('.parallax-bg');

// window.addEventListener('scroll', function() {
//   let offset = window.pageYOffset;
//   parallaxBg.style.backgroundPositionY = offset * 0.7 + 'px';
// });