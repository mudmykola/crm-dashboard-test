const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
});
searchInput.addEventListener('mousedown', () => {
    searchInput.value = '';
});
