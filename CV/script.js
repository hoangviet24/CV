document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('toggle-theme');
    const icon = btn.querySelector('i');
    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
});