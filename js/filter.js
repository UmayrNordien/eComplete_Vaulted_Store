// Search filter by letters
const searchInput = document.querySelector('#search-input'); // Get the search input element
const productBoxes = document.querySelectorAll('.product-box'); // Get all product box elements

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase(); // Get the search value in lowercase

  productBoxes.forEach(productBox => {
    const productTitle = productBox.querySelector('.product-title').textContent.toLowerCase(); // Get the product title in lowercase
    
    if (productTitle.includes(searchValue)) { // Check if the product title includes the search value
      productBox.style.display = 'block'; // Display the product box
    } else {
      productBox.style.display = 'none'; // Hide the product box
    }
  });
});


// Filter by price range
const priceRange = document.querySelector('#price-range'); // Get the price range element
const minPrice = document.querySelector('#min-price'); // Get the minimum price input element
const maxPrice = document.querySelector('#max-price'); // Get the maximum price input element

priceRange.addEventListener('input', () => {
  const minPriceValue = parseInt(minPrice.value); // Get the minimum price value as an integer
  const maxPriceValue = parseInt(maxPrice.value); // Get the maximum price value as an integer

  productBoxes.forEach(productBox => {
    const productPrice = parseInt(productBox.querySelector('.price').textContent.slice(1)); // Get the product price as an integer
    
    if (productPrice >= minPriceValue && productPrice <= maxPriceValue) { // Check if the product price is within the price range
      productBox.style.display = 'block'; // Display the product box
    } else {
      productBox.style.display = 'none'; // Hide the product box
    }
  });
});