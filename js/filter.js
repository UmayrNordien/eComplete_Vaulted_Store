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