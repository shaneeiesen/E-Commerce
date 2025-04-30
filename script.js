
const viewProductModalBtn = document.querySelectorAll(".btn-secondary");
const viewProductDialog = document.querySelector("dialog");
const closeProductDialog = document.querySelector("dialog button");

//

const cartBtns = document.querySelectorAll(".bi.bi-bag");
const viewCart = document.querySelector("#cartDialog");
const closeCart = document.querySelector("#cartButton");

const favoriteBtns = document.querySelectorAll(".bi.bi-heart");
const viewFavorite = document.querySelector("#favDialog");
const closeFavorite = document.querySelector("#heartButton");

//login and register

const loginBtn = document.getElementById("login");
const viewLogin = document.getElementById("loginDialog");
const closeLogin = document.getElementById("closeLogin");

const registerBtn = document.getElementById("signup");
const viewRegister = document.getElementById("signupDialog");
const closeRegister = document.getElementById("closeSignup");

//Product container

//Get products from server

 //let products=[];

async function fetchProducts() {
  const setProducts = await fetch("https://dummyjson.com/products ");
  const data = await setProducts.json();
   const { products } = data;
   displayProducts(products)
  // products.push(data);
}
fetchProducts();

let container = document.getElementById("product-container");


function displayProducts(products){

  for (let i = 0; i < products.length; i++) {

    let product = products[i];
  
        let productHtml = `
          
          <div class="product">
              <img src="${product.thumbnail}"
                  alt="">
  
                  <div class="discount">${product.discountPercentage}%</div>
  
              <div class="details">
                  <div class="reviews"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i> ${product.rating}</div>
                  <div class="title">${product.title}</div>
                  <div class="price">${product.price}</div>
                  <div class="btn-group">
                      <button class="btn-secondary btnViewProduct">View</button>
                      <button class="btn-primary">Add to Cart</button>
                  </div>
              </div>
          </div>`;
        container.innerHTML += productHtml;
      }
      
      const viewButtons = document.querySelectorAll(".btnViewProduct");
      viewButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const viewProductDialog = document.querySelector("#viewProductDialog");
          viewProductDialog.showModal();
        });
      });

}




  


////////////////
const viewProductModalBtn1 = document.querySelectorAll(".btn-secondary");
let viewProductDialog1 = document.querySelector("#viewProductDialog");
let closeProductDialog1 = document.querySelector("#btn-decclose");

// console.log({ groceries });
/////////

viewProductModalBtn1.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    viewProductDialog1.showModal();
  });
});
closeProductDialog1.addEventListener("click", () => {
  viewProductDialog1.close();
});

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

//
//
loginBtn.addEventListener("click", () => {
  viewLogin.showModal();
});

closeLogin.addEventListener("click", () => {
  viewLogin.close();
});

registerBtn.addEventListener("click", () => {
  viewRegister.showModal();
});

closeRegister.addEventListener("click", () => {
  viewRegister.close();
});

let angle = 0; // Initial angle
const carousel = document.getElementById("carousel");
const rotateSpeed = 3; // Speed of the rotation

function rotateCarousel() {
  angle += rotateSpeed; // Increase the angle for the next rotation
  carousel.style.transform = `rotateY(${angle}deg)`; // Apply the rotation
}

// Optionally, you can make the rotation continuous by using setInterval
setInterval(rotateCarousel, 100); // Rotate the carousel every 100ms
