function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const maxPrice = priceFilter.value;
  const selectedSize = sizeFilter.value.toLowerCase(); // no clue why this isnt working 

  priceValue.textContent = `R${maxPrice}`;

  productBoxes.forEach(box => {
    const title = box.querySelector('.product-title').textContent.toLowerCase();
    const price = parseInt(box.querySelector('.price').textContent.slice(1));
    const sizes = box.querySelector('.product-size').textContent.toLowerCase();

    if (
      title.includes(searchTerm) &&
      price <= maxPrice &&
      sizes.includes(selectedSize)
    ) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}

