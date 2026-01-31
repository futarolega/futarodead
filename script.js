// Переключение темы
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Плавная анимация перехода
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.href;
        document.querySelector('.page-transition').style.transform = 'translateY(0)';
        setTimeout(() => {
            window.location.href = target;
        }, 600);
    });
});