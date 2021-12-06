const input = document.querySelector(".product-quantity__input");
const cart = document.querySelector(".navbar-cart");
const dropdown = document.querySelector(".dropdown-content");
const number = document.querySelector(".number");
const subtotal = document.querySelector('.subtotal-number');

function addToCart() {
    if (input.value >= 1) {
        number.innerHTML = `${input.value}`;
        cart.classList.add('navbar-cart-active');
        dropdown.style.display = "block";
        subtotal.innerHTML = `$${input.value * 18}.00 CAD`;
    }
}