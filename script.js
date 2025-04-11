const viewProductModalBtn = document.querySelectorAll(".btn-secondary");
const viewProductDialog = document.querySelector("dialog");
const closeProductDialog = document.querySelector("dialog button");

//

const cartBtns = document.querySelectorAll(".bi.bi-bag");
const viewCart = document.querySelector("#cartDialog");
const closeCart= document.querySelector("#cartButton");



const favoriteBtns = document.querySelectorAll(".bi.bi-heart");
const viewFavorite = document.querySelector("#favDialog");
const closeFavorite = document.querySelector("#heartButton");


viewProductModalBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    viewProductDialog.showModal();
  });
});

closeProductDialog.addEventListener("click", () => {
  viewProductDialog.close();
});

//
cartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewCart.showModal();
  });
});

closeCart.addEventListener("click", () => {
  viewCart.close();
});

favoriteBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    viewFavorite.showModal();
  });
});

closeFavorite.addEventListener("click", () => {
  viewFavorite.close();
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