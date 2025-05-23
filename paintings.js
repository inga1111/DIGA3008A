document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
  
    document.querySelectorAll('.centerGridImg img').forEach(img => {
      img.addEventListener('click', function () {
        lightboxImg.src = this.src;
        overlay.style.display = 'flex';
      });
    });
  
    closeBtn.addEventListener('click', function () {
      overlay.style.display = 'none';
      lightboxImg.src = '';
    });
  
    // Optional: close when clicking outside the image
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.style.display = 'none';
        lightboxImg.src = '';
      }
    });
  });