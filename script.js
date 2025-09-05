const addToCartButtons = document.querySelectorAll('.add-to-cart');
const resetButton = document.getElementById('resetButton');
const cartDisplay = document.querySelector('.empty-space');

function clearCart() {
  cartDisplay.innerHTML = '<h2>Cart</h2><p>Cart is empty.</p>';
}

clearCart();

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.product');
    const name = productCard.querySelector('h3').innerText;
    const qtyInput = productCard.querySelector('.qty-input');
    const quantity = parseInt(qtyInput.value);

    if (quantity > 0) {
      if (cartDisplay.innerHTML.includes('Cart is empty.')) {
        cartDisplay.innerHTML = '<h2>Cart</h2>';
      }

      const cartItem = document.createElement('p');
      cartItem.innerText = `${name} - Quantity: ${quantity}`;
      cartDisplay.appendChild(cartItem);
    }

    qtyInput.value = 1;
  });
});

resetButton.addEventListener('click', () => {
  const quantityInputs = document.querySelectorAll('.qty-input');
  quantityInputs.forEach((input) => {
    input.value = 1;
  });

  clearCart();
});