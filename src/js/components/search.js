const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    // виконуємо пошук тут
});

function clearInput() {
    searchInput.value = '';
}

// звертаємо увагу на зміну: onclick -> onmousedown
searchInput.addEventListener('mousedown', clearInput);
