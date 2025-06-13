document.addEventListener('DOMContentLoaded', function() {
    
    const titleElement = document.querySelector('.oval-text'); 
    const titleText = "Inga's Archive";
    
    if (titleElement) {
        typeWriter(titleElement, titleText);
    }

   
    const body = document.querySelector('body');
    body.style.opacity = '0';
    setTimeout(() => {
        body.style.transition = 'opacity 1.5s ease-in-out';
        body.style.opacity = '1';
    }, 100);

    //  effects for nav items
    const navItems = document.querySelectorAll('.menulinks li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

   
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax'); 
        parallaxElements.forEach(element => {
            element.style.transform = 'translateY(${scrollPosition * 0.5}px)';
        });
    });

    
    const blogImages = document.querySelectorAll('.blog-image img');
    blogImages.forEach(img => {
        const randomRotation = Math.floor(Math.random() * 10) - 5; 
        img.style.transform = 'rotate(${randomRotation}deg)';
        img.style.transition = 'transform 0.5s ease';
        
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'rotate(0deg) scale(1.05)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(${randomRotation}deg) scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    
    const dates = document.querySelectorAll('.blog-text span');
    dates.forEach(date => {
        const randomRotation = Math.floor(Math.random() * 8) - 4; 
        date.style.display = 'inline-block';
        date.style.transform = 'rotate(${randomRotation}deg)';
        date.style.backgroundColor = '#fff';
        date.style.padding = '2px 8px';
        date.style.boxShadow = '1px 1px 3px rgba(0,0,0,0.2)';
    });
});

// ypewriter  ibe
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML = text.substring(0, i + 1) + '<span class="cursor" aria-hidden="true"></span>';
        setTimeout(function() {
            typeWriter(element, text, i + 1);
        }, 100); // typing speed
    } else {
                element.innerHTML = text + '<span class="cursor blinking" aria-hidden="true"></span>';
    }
}