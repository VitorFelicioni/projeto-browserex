const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('bd')
    if(mode.classList.contains('fa-sun')) {
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        form.classList.add('light')
        return;
    }

    mode.classList.add('fa-sun');
    mode.classList.remove('fa-moon');
    form.classList.remove('light');
});