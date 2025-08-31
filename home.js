document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu_icon i');
    const pagesLinks = document.querySelector('.pages-link-div');

    menuIcon.addEventListener('click', function() {
        pagesLinks.classList.toggle('show');
    });
});
