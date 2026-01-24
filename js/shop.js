// Ecwid Cart Integration for Custom Product Cards
// This script integrates custom HTML product cards with Ecwid's cart functionality

// IMPORTANT: Replace PRODUCT_ID_X with actual Ecwid Product IDs from your Ecwid admin panel
// To find your product IDs:
// 1. Go to Ecwid Control Panel → Catalog → Products
// 2. Click on each product
// 3. The product ID is in the URL (e.g., https://my.ecwid.com/cp/CP.html#product:id=12345678)

const PRODUCT_IDS = {
    'Generator vodika OLV-HYD1800': '811184690',
    'Generator vodika OLV-HYD3000': '811200271',
    'Vodikova Flaška': '811200276',
    'Vodikov sprej': '811184695'
};

// Wait for Ecwid to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Wait for Ecwid to fully initialize
    setTimeout(initializeShop, 1000);
});

function initializeShop() {
    // Initialize color selector for Vodikova Flaška
    initColorSelector();

    // Initialize Add to Cart buttons
    initAddToCartButtons();
}

// Color Selector Functionality
function initColorSelector() {
    const colorOptions = document.querySelectorAll('.color-option');
    const colorNameDisplay = document.querySelector('.selected-color-name');

    if (!colorOptions.length) return;

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));

            // Add active class to clicked option
            this.classList.add('active');

            // Update color name display
            const colorName = this.getAttribute('data-color');
            if (colorNameDisplay) {
                colorNameDisplay.textContent = colorName;
            }
        });
    });
}

// Add to Cart Functionality
function initAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-product-id');
            const productName = this.getAttribute('data-product-name');
            const productPrice = this.getAttribute('data-product-price');
            const hasOptions = this.getAttribute('data-has-options');

            // Check if we have a valid product ID (not placeholder)
            if (productId.startsWith('PRODUCT_ID_')) {
                alert('⚠️ Ecwid Product ID manjka!\n\nProsim nastavi pravilne Product IDs v datoteki js/shop.js\n\nNavodila so v komentarjih na vrhu datoteke.');
                return;
            }

            // Get quantity if input exists
            let quantity = 1;
            const qtyInput = document.getElementById('quantity');
            if (qtyInput) {
                quantity = parseInt(qtyInput.value) || 1;
            }

            // Prepare cart item
            const cartItem = {
                id: productId,
                quantity: quantity
            };

            // If product has options (like color for Vodikova Flaška)
            if (hasOptions === 'true') {
                const selectedColor = document.querySelector('.color-option.active');
                if (selectedColor) {
                    const colorName = selectedColor.getAttribute('data-color');
                    cartItem.options = {
                        'Barva': colorName
                    };
                }
            }

            // Add to Ecwid cart
            try {
                if (typeof Ecwid !== 'undefined' && Ecwid.Cart) {
                    Ecwid.Cart.addProduct(cartItem);

                    // Visual feedback
                    showAddToCartFeedback(button, productName);
                } else {
                    console.error('Ecwid ni naložen ali Cart API ni na voljo');
                    alert('Napaka: Košarica trenutno ni na voljo. Prosim osvežite stran.');
                }
            } catch (error) {
                console.error('Napaka pri dodajanju v košarico:', error);
                alert('Napaka pri dodajanju v košarico. Prosim poskusite ponovno.');
            }
        });
    });
}

// Visual Feedback on Add to Cart
function showAddToCartFeedback(button, productName) {
    const originalText = button.textContent;

    // Change button text temporarily
    button.textContent = '✓ Dodano!';
    button.style.background = '#27ae60';
    button.disabled = true;

    // Reset after 2 seconds
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        button.disabled = false;
    }, 2000);

    // Optional: Show a toast notification
    showToast(`${productName} dodan v košarico`);
}

// Toast Notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInUp 0.3s ease-out;
        font-weight: 600;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        @keyframes slideOutDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add to DOM
    document.body.appendChild(toast);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}
