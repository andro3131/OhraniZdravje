// Product Detail Page JavaScript

// Initialize AOS animations
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Image Gallery
function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;

    // Update active thumb
    document.querySelectorAll('.thumb').forEach(thumb => thumb.classList.remove('active'));
    element.classList.add('active');
}

// Quantity Controls
function increaseQty() {
    const qtyInput = document.getElementById('quantity');
    const currentQty = parseInt(qtyInput.value);
    const maxQty = parseInt(qtyInput.max);

    if (currentQty < maxQty) {
        qtyInput.value = currentQty + 1;
    }
}

function decreaseQty() {
    const qtyInput = document.getElementById('quantity');
    const currentQty = parseInt(qtyInput.value);
    const minQty = parseInt(qtyInput.min);

    if (currentQty > minQty) {
        qtyInput.value = currentQty - 1;
    }
}

// Product Tabs
function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    const clickedBtn = event.target;
    clickedBtn.classList.add('active');
}

// Color Variant Selection (for flask page)
function selectColor(element, colorName) {
    // Update active state
    document.querySelectorAll('.color-option').forEach(option => option.classList.remove('active'));
    element.classList.add('active');

    // Update selected color display
    const colorDisplay = document.getElementById('selectedColor');
    if (colorDisplay) {
        colorDisplay.textContent = colorName;
    }
}
