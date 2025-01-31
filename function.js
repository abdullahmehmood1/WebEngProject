// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle?.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Cart Functionality
let cartItems = [];
const cartIcon = document.createElement('div');
cartIcon.className = 'cart-icon';
cartIcon.innerHTML = '🛒 <span class="cart-count">0</span>';

const cartModal = document.createElement('div');
cartModal.className = 'cart-modal';
document.body.append(cartIcon, cartModal);

// Toggle cart visibility
cartIcon.addEventListener('click', () => {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    updateCartDisplay();
});

// Add to cart functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        const product = e.target.closest('.box');
        const productName = product.querySelector('.name p').textContent;
        const productPrice = product.querySelector('.price h3').textContent;
        
        cartItems.push({ name: productName, price: productPrice });
        updateCartCount();
    }
});

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cartItems.length;
}

function updateCartDisplay() {
    cartModal.innerHTML = '<h3>Your Cart</h3>';
    if (cartItems.length === 0) {
        cartModal.innerHTML += '<p>Cart is empty</p>';
        return;
    }
    
    cartItems.forEach(item => {
        cartModal.innerHTML += `<div>${item.name} - ${item.price}</div>`;
    });
}

// Form Validation
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        e.target.reset();
    }
});

function validateForm() {
    const email = document.getElementById('email').value;
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        alert('Please enter a valid email');
        return false;
    }
    return true;
}

// Hamburger Menu for Mobile
const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '☰';
document.querySelector('.navbar')?.prepend(hamburger);

hamburger?.addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('responsive');
});

// Add "Add to Cart" and "Shop Now" Buttons to Product Boxes
const phoneBoxes = document.querySelectorAll(".box");

phoneBoxes.forEach((box) => {
    const shopNowButton = document.createElement("button");
    shopNowButton.textContent = "Shop Now";
    shopNowButton.style.marginRight = "10px";
    shopNowButton.style.padding = "10px 15px";
    shopNowButton.style.backgroundColor = "#28a745";
    shopNowButton.style.color = "#fff";
    shopNowButton.style.border = "none";
    shopNowButton.style.cursor = "pointer";

    shopNowButton.addEventListener("click", () => {
        const phoneName = box.querySelector(".name p:first-child").textContent.trim();
        alert(`Redirecting to shop page for ${phoneName}`);
    });

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add('add-to-cart'); // Add class for cart functionality
    addToCartButton.style.padding = "10px 15px";
    addToCartButton.style.backgroundColor = "#007bff";
    addToCartButton.style.color = "#fff";
    addToCartButton.style.border = "none";
    addToCartButton.style.cursor = "pointer";

    const buttonContainer = document.createElement("div");
    buttonContainer.style.marginTop = "10px";
    buttonContainer.appendChild(shopNowButton);
    buttonContainer.appendChild(addToCartButton);
    box.appendChild(buttonContainer);
});

let img = document.getElementById("image");
        let position = 0;
        let direction = 1;

        function moveImage() {
            position += direction * 2;
            img.style.left = position + "px";

            if (position > 200 || position < 0) {
                direction *= -1; // Reverse direction when hitting boundaries
            }

            requestAnimationFrame(moveImage);
        }

        moveImage();
