const viewProductModalBtn = document.querySelectorAll(".btn-secondary");
const viewProductDialog = document.querySelector("dialog");
const closeProductDialog = document.querySelector("dialog button");

viewProductModalBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    viewProductDialog.showModal();
  });
});

closeProductDialog.addEventListener("click", () => {
  viewProductDialog.close();
});

let angle = 0; // Initial angle
const carousel = document.getElementById('carousel');
const rotateSpeed = 3; // Speed of the rotation

function rotateCarousel() {
    angle += rotateSpeed; // Increase the angle for the next rotation
    carousel.style.transform = `rotateY(${angle}deg)`; // Apply the rotation
}

// Optionally, you can make the rotation continuous by using setInterval
setInterval(rotateCarousel, 100); // Rotate the carousel every 100ms