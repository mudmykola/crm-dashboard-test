const buttons = document.querySelectorAll('.header-acide__btn');
const dashboard = document.querySelector('#dashboard');
const buttonss = document.querySelectorAll('.dashboard-list__status button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and add it to clicked button
        buttons.forEach(btn => btn.classList.toggle('active', btn === button));

        // Hide all content
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });

        // Show content corresponding to button data-target
        const target = button.getAttribute('data-target');
        const content = document.querySelector(`#${target}`);
        if (content) {
            content.style.display = 'block';
        }

        // Show dashboard if button data-target is 'content-3'
        dashboard.style.display = target === 'content-3' ? 'block' : 'none';
        if (target === 'content-3') {
            setTimeout(() => {
                dashboard.style.opacity = 1;
            }, 10);
        }
    });
});


// Activating the .inactive class
buttonss.forEach(button => {
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

