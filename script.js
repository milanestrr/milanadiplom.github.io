const savedTheme = localStorage.getItem('theme');

if(savedTheme === 'dark'){
    document.body.classList.add('dark-theme');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.14 });

document.querySelectorAll('.card, .reveal').forEach((el) => {
    observer.observe(el);
});

const toggle = document.getElementById('theme-toggle');

if(toggle){
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');

        if(document.body.classList.contains('dark-theme')){
            localStorage.setItem('theme', 'dark');
        }else{
            localStorage.setItem('theme', 'light');
        }
    });
}