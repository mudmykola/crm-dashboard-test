const headerAcidBtn = document.querySelectorAll('.header-acide__btn');
const dashboard = document.querySelector('#dashboard');
const dashboardList = document.querySelectorAll('.dashboard-list__status' +
    ' button');

headerAcidBtn.forEach(button => {
    button.addEventListener('click', () => {
        // Видаліть активний клас з усіх кнопок
        headerAcidBtn.forEach(btn => btn.classList.toggle('active', btn === button));

        // Приховати весь вміст
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });

        // Показати вміст data-target
        const target = button.getAttribute('data-target');
        const content = document.querySelector(`#${target}`);
        if (content) {
            content.style.display = 'block';
        }

        // Показати дашборд
        dashboard.style.display = target === 'content-3' ? 'block' : 'none';
        if (target === 'content-3') {
            setTimeout(() => {
                dashboard.style.opacity = 1;
            }, 10);
        }
    });
});


// Активація класу .inactive
dashboardList.forEach(button => {
    button.addEventListener('click', () => {
        const parent = button.parentNode;
        parent.classList.toggle('inactive');
        if (parent.classList.contains('inactive')) {
            button.textContent = 'Inactive';
            button.style.textAlign = 'center';
            button.style.background = '$c108';
            button.style.color = '$c107';
            button.style.border = '1px solid $c107';
        } else {
            button.textContent = 'Active';
            button.style.textAlign = '';
            button.style.background = '';
            button.style.color = '';
            button.style.border = '';
        }
    });
});



