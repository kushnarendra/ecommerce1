const bar = document.getElementById('bar');
const bav = document.getElementsByClassName('navbar');

if (bar) {
    bar.addEventListener('click', () => {
      
        for (let i = 0; i < bav.length; i++) {
            nav[i].classList.add('active');
        }
    });
}






document.addEventListener("DOMContentLoaded", function() {
    // Hide sign up and recover password sections
    var signUpSection = document.querySelector('.signup');
    var recoverPasswordSection = document.querySelector('.recover-password');
    signUpSection.style.display = 'none';
    recoverPasswordSection.style.display = 'none';

    // Get buttons
    var resetButton = document.querySelector('.btn-reset');
    var memberButton = document.querySelector('.btn-member');
    var loginButton = document.querySelector('.btn-login');
    var passwordButton = document.querySelector('.btn-password');

    // Recover password button click event
    resetButton.addEventListener('click', function() {
        hideAllSections();
        recoverPasswordSection.style.display = 'block';
    });

    // Not a member yet button click event
    memberButton.addEventListener('click', function() {
        hideAllSections();
        signUpSection.style.display = 'block';
    });

    // Sign in button click event
    loginButton.addEventListener('click', function() {
        hideAllSections();
        var loginSection = document.querySelector('.login');
        loginSection.style.display = 'block';
    });

    // Submit reset button click event
    passwordButton.addEventListener('click', function() {
        var resetPasswordInput = document.getElementById('resetPassword');
        var errorSpan = document.querySelector('.error');
        var resetMailSpan = document.querySelector('.reset-mail');
        var notificationSection = document.querySelector('.notification');

        if (resetPasswordInput.value.trim() === "") {
            errorSpan.textContent = 'Email not valid.';
        } else {
            resetMailSpan.textContent = resetPasswordInput.value;
            document.querySelector('.recover-password form').style.display = 'none';
            notificationSection.style.display = 'block';
        }
    });

    // Function to hide all sections
    function hideAllSections() {
        var allSections = document.querySelectorAll('.sign-panels > div');
        allSections.forEach(function(section) {
            section.style.display = 'none';
        });
    }
});



//new arrival js
const imagePaths = [
    'img/b2.jpg',
    'img/bg1.jpg',
    'img/bg2.jpg',
    'img/bg3.jpg',
    'img/bg4.jpg',
    'img/wat1.jpg',
    'img/wat2.jpg',
    'img/wat3.jpg',
    // Add more image paths here
    ];
    
    const slideContainer = document.getElementById('slideContainer');
    const dotsContainer = document.querySelector('.dots-container');
    
    imagePaths.forEach((imagePath, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide fade';
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = 'Slide ' + (index + 1);
    slide.appendChild(img);
    slideContainer.appendChild(slide);
    
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlides();
    });
    dotsContainer.appendChild(dot);
    });
    
    let currentSlide = 0;
    showSlides();
    
    function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));
    slides[currentSlide].style.display = 'block';
    dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
    currentSlide++;
    showSlides();
    }
    
    function prevSlide() {
    currentSlide--;
    showSlides();
    }
    
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
    
    setInterval(nextSlide, 5000);