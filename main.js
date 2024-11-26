let header = document.querySelector('header');
        let menu = document.querySelector('#menu-icon');
        let navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            header.classList.toggle('shadow', window.scrollY > 0);
        });

        menu.onclick = () => {
            menu.classList.toggle('bx-x')
            navbar.classList.toggle('active')
        }
        window.onscroll = () => {
            menu.classList.remove('bx-x')
            navbar.classList.remove('active')
        }

        var swiper = new Swiper(".home", {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        var swiper = new Swiper(".coming-container", {
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 55000,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                568: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 4,
                },
                968: {
                    slidesPerView: 5,
                },
            },
        });

        // ... (previous content remains the same) ...

// Add event listeners to all movie rating selects
document.querySelectorAll('.movie-rating').forEach(select => {
    select.addEventListener('change', function() {
        const movieId = this.getAttribute('data-movie-id');
        const rating = this.value;

        if (rating) {
            // Send AJAX request
            fetch('rateMovie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `movieId=${movieId}&rating=${rating}`
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Thank you for rating!');
                } else {
                    alert('There was an error saving your rating. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error saving your rating. Please try again.');
            });
        }
    });
});