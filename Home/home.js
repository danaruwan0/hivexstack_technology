document.addEventListener('DOMContentLoaded', function() {
            const menuIcon = document.querySelector('.menu_icon i');
            const closeBtn = document.querySelector('.close-btn');
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            
            menuIcon.addEventListener('click', function() {
                sidebar.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
            
            closeBtn.addEventListener('click', function() {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
            });
            
            overlay.addEventListener('click', function() {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = ''; // Enable scrolling
            });
        });