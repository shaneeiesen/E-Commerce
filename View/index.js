// const viewModalBtn = document.querySelector("#viewModalBtn")
// const detailDialog = document.querySelector("#detailDialog")
// const hideModalBtn = document.querySelector("#hideModalBtn")

// viewModalBtn.addEventListener('click', () => {
//     detailDialog.showModal()
// })

// hideModalBtn.addEventListener('click', () => {
//     detailDialog.close()
// })

// Get dialog and its elements
const dialog = document.getElementById("viewProductDialog");
const modal = document.querySelector("#viewProductDialog");
const closeModalBtn = document.querySelector("#btn-decclose");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPrice = document.getElementById("modalPrice");
const modalRating = document.getElementById("modalRating");
const container = document.getElementById("product-container");
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

// Slide buttons
let currentSlideIndex = 0;
let currentImageList = [];

const thumbnailScroll = document.querySelector(".thumbnail-scroll");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
//Product container

//Get products from server

//let products=[];



// Fetch products and display
async function fetchProducts() {
    const setProducts = await fetch("https://dummyjson.com/products");
    const data = await setProducts.json();
    const { products } = data;
    displayProducts(products);
}

fetchProducts();

// Display product cards and attach modal logic
function displayProducts(products) {
    container.innerHTML = "";

    products.forEach((product, i) => {
        const productHtml = `
       <div class="product">
         <img src="${product.thumbnail}" alt="${product.title}">
         <div class="discount">${product.discountPercentage}%</div>
         <div class="details">
           <div class="reviews">
             <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
             ${product.rating}
           </div>
           <div class="title">${product.title}</div>
           <div class="price">$${product.price}</div>
           <div class="btn-group">
             <button class="btn-secondary btnViewProduct" data-index="${i}">View</button>
             <button class="btn-primary">Add to Cart</button>
           </div>
         </div>
       </div>
     `;

        container.innerHTML += productHtml;
    });

    // After rendering, attach event listeners
    const viewButtons = document.querySelectorAll(".btnViewProduct");

    function showSlide(index) {
        currentSlideIndex = (index + currentImageList.length) % currentImageList.length;
        modalImage.src = currentImageList[currentSlideIndex];
        
        // Highlight the selected thumbnail
        document.querySelectorAll(".thumbnail-scroll img").forEach((img, i) => {
            img.classList.toggle("active", i === currentSlideIndex);
        });
    }
    prevSlideBtn.addEventListener("click", () => showSlide(currentSlideIndex - 1));
    nextSlideBtn.addEventListener("click", () => showSlide(currentSlideIndex + 1));
    viewButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const index = e.target.dataset.index;
            const product = products[index];
            
            currentImageList = product.images && product.images.length ? product.images : [product.thumbnail];
            currentSlideIndex = 0;
            
            // Add thumbnails dynamically
            thumbnailScroll.innerHTML = "";
            currentImageList.forEach((src, i) => {
                const thumb = document.createElement("img");
                thumb.src = src;
                thumb.addEventListener("click", () => showSlide(i));
                thumbnailScroll.appendChild(thumb);
            });
    
        
    
    
            // Set up slideshow
            // currentImageList = product.images ?? [product.images]; // fallback
            // currentSlideIndex = 0;
            showSlide(currentSlideIndex);

            // Fill in modal with selected product details
            
            showSlide(currentSlideIndex);
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalPrice.textContent = product.price;
            modalRating.textContent = product.rating;
            modalReviews.textContent = product.reviews;
            modalDiscount.textContent = `${product.discountPercentage}%`;
            modalQuantity.textContent = product.stock;
            modalCategory.textContent = product.category;
            modalBrand.textContent = product.brand;
            modalWarranty.textContent = product.warrantyInformation;
            modalShipping.textContent = product.shippingInformation;
            modalReturn.textContent = product.returnPolicy;
            modalAvailability.textContent = product.availabilityStatus;

            modalReviews.innerHTML = ""; // Clear any previous reviews

            product.reviews.forEach((review) => {
                const reviewHTML = `
                <div class="single-review" style="margin-bottom: 1em;">
                  <p><strong>${review.reviewerName}</strong> (${new Date(review.date).toLocaleDateString()})</p>
                  <p>Rating: ${review.rating} ⭐</p>
                  <p><em>${review.comment}</em></p>
                </div>
              `;
                modalReviews.innerHTML += reviewHTML;
            });

            modal.showModal();

        });
    });
}
// add action for the slide buttons
prevSlideBtn.addEventListener("click", () => {
    showSlide(currentSlideIndex - 1);
});

nextSlideBtn.addEventListener("click", () => {
    showSlide(currentSlideIndex + 1);
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
    modal.close();
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
console.log("first")