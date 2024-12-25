const menuData = {
    vegetarian: {
        "Starters": [
            { name: "Paneer Tikka", price: 250, description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions, served with mint chutney" },
            { name: "Veg Spring Rolls", price: 180, description: "Crispy rolls stuffed with shredded cabbage, carrots, and glass noodles, served with sweet chili sauce" },
            { name: "Mushroom 65", price: 200, description: "Deep-fried button mushrooms tossed in spicy South Indian style sauce with curry leaves and green chilies" },
            { name: "Corn Cheese Balls", price: 160, description: "Golden-fried balls of sweet corn kernels and mozzarella cheese, served with tomato ketchup" },
            { name: "Crispy Baby Corn", price: 190, description: "Crunchy battered baby corn fritters seasoned with aromatic spices, served with garlic mayo" }
        ],
        "Soups": [
            { name: "Tomato Basil Soup", price: 140, description: "Fresh tomatoes blended with aromatic basil, served with garlic croutons" },
            { name: "Sweet Corn Soup", price: 160, description: "Creamy corn soup with diced vegetables and pepper" },
            { name: "Manchow Soup", price: 150, description: "Spicy Indo-Chinese soup with mushrooms and vegetables, topped with crispy noodles" },
            { name: "Hot & Sour Soup", price: 150, description: "Tangy and spicy soup with mushrooms, bamboo shoots, and tofu" },
            { name: "Lemon Coriander Soup", price: 140, description: "Clear vegetable soup flavored with fresh coriander and lemon" }
        ],
        "Main Course": [
            { name: "Paneer Butter Masala", price: 280, description: "Soft cottage cheese cubes in rich tomato-based gravy with butter and cream, finished with dried fenugreek leaves" },
            { name: "Dal Makhani", price: 240, description: "Black lentils slow-cooked overnight with butter and cream, a North Indian delicacy" },
            { name: "Veg Biryani", price: 260, description: "Fragrant basmati rice layered with mixed vegetables and aromatic spices, served with raita" },
            { name: "Palak Paneer", price: 270, description: "Fresh spinach puree cooked with cottage cheese cubes, garlic, and mild spices" },
            { name: "Malai Kofta", price: 290, description: "Soft vegetable and cheese dumplings in a luxurious cashew and tomato gravy" }
        ],
        "Rice & Breads": [
            { name: "Jeera Rice", price: 160, description: "Fragrant basmati rice tempered with cumin seeds and whole spices" },
            { name: "Butter Naan", price: 50, description: "Soft clay oven-baked flatbread brushed with melted butter" },
            { name: "Garlic Roti", price: 40, description: "Whole wheat flatbread topped with fresh garlic and coriander" },
            { name: "Veg Pulao", price: 220, description: "Basmati rice cooked with mixed vegetables and mild whole spices" },
            { name: "Stuffed Kulcha", price: 70, description: "Refined flour bread stuffed with spiced potato or paneer, baked in clay oven" }
        ],
        "Desserts": [
            { name: "Gulab Jamun", price: 120, description: "Soft milk dough balls deep-fried and soaked in rose-flavored sugar syrup" },
            { name: "Rasmalai", price: 140, description: "Soft cottage cheese patties immersed in saffron-flavored thickened milk" },
            { name: "Kheer", price: 130, description: "Traditional rice pudding with cardamom, nuts, and saffron" },
            { name: "Gajar Ka Halwa", price: 150, description: "Traditional carrot pudding made with fresh carrots, milk, and nuts" },
            { name: "Ice Cream", price: 100, description: "Choice of vanilla, chocolate, strawberry, or butterscotch with nuts and chocolate sauce" }
        ],
        "Beverages": [
            { name: "Masala Chai", price: 60, description: "Indian spiced tea with cardamom, ginger, and herbs" },
            { name: "Fresh Lime Soda", price: 80, description: "Refreshing lime soda served sweet or salted" },
            { name: "Mango Lassi", price: 100, description: "Thick yogurt smoothie with mango pulp and cardamom" },
            { name: "Virgin Mojito", price: 120, description: "Mint and lime mocktail with soda and crushed ice" },
            { name: "Cold Coffee", price: 130, description: "Creamy blended coffee topped with whipped cream" }
        ]
    },
    nonVegetarian: {
        "Starters": [
            { name: "Chicken Tikka", price: 300, description: "Tender chicken pieces marinated in yogurt and spices, grilled in clay oven, served with mint chutney" },
            { name: "Fish Amritsari", price: 320, description: "Fresh fish fillets coated in spiced gram flour batter and deep-fried, served with tangy sauce" },
            { name: "Mutton Seekh Kebab", price: 350, description: "Minced lamb mixed with herbs and spices, skewered and grilled, served with onion rings" },
            { name: "Prawn 65", price: 380, description: "Crispy fried prawns tossed in spicy sauce with curry leaves and green chilies" },
            { name: "Chicken Wings", price: 280, description: "Crispy chicken wings tossed in choice of sauce - BBQ, Hot & Spicy, or Honey Garlic" }
        ],
        "Soups": [
            { name: "Chicken Sweet Corn Soup", price: 180, description: "Creamy corn soup with shredded chicken and vegetables" },
            { name: "Mutton Clear Soup", price: 200, description: "Light mutton broth with herbs and vegetables" },
            { name: "Chicken Hot & Sour Soup", price: 170, description: "Spicy and tangy soup with chicken, mushrooms, and bamboo shoots" },
            { name: "Seafood Soup", price: 220, description: "Mixed seafood soup with prawns, fish, and herbs" },
            { name: "Chicken Manchow Soup", price: 170, description: "Spicy Indo-Chinese soup with chicken and vegetables, topped with fried noodles" }
        ],
        "Main Course": [
            { name: "Butter Chicken", price: 340, description: "Tandoor-cooked chicken in rich tomato gravy with butter and cream, a classic favorite" },
            { name: "Mutton Rogan Josh", price: 380, description: "Tender lamb chunks slow-cooked in Kashmiri spices and yogurt gravy" },
            { name: "Fish Curry", price: 360, description: "Fresh fish cooked in coconut milk-based curry with curry leaves and kokum" },
            { name: "Chicken Biryani", price: 320, description: "Aromatic basmati rice layered with marinated chicken and spices, served with raita" },
            { name: "Prawn Masala", price: 400, description: "Succulent prawns cooked in onion-tomato gravy with coastal spices" }
        ],
        "Tandoor Specials": [
            { name: "Tandoori Chicken", price: 450, description: "Half chicken marinated in yogurt and spices, slow-cooked in tandoor, served with onion rings" },
            { name: "Mixed Grill Platter", price: 650, description: "Assortment of tandoori chicken, fish tikka, seekh kebab, and chicken tikka" },
            { name: "Chicken Malai Tikka", price: 320, description: "Creamy marinated chicken pieces grilled to perfection" },
            { name: "Fish Tikka", price: 420, description: "Boneless fish chunks marinated in spices and grilled, served with mint chutney" },
            { name: "Tandoori Prawns", price: 480, description: "Jumbo prawns marinated in spices and grilled in tandoor" }
        ],
        "Beverages": [
            { name: "Classic Mojito", price: 180, description: "Refreshing cocktail with rum, mint, and lime" },
            { name: "Fruit Punch", price: 160, description: "Mixed fruit juice blend with sprite and ice" },
            { name: "Iced Tea", price: 120, description: "Classic lemon iced tea with fresh mint" },
            { name: "Smoothies", price: 150, description: "Choice of strawberry, mango, or mixed berry" },
            { name: "Fresh Juices", price: 130, description: "Seasonal fresh fruit juices" }
        ]
    }
};

// DOM Elements
const menuContainer = document.getElementById('menuContainer');
const searchInput = document.getElementById('searchInput');
const showAllBtn = document.getElementById('showAllBtn');
const vegBtn = document.getElementById('vegBtn');
const nonVegBtn = document.getElementById('nonVegBtn');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeBtn = document.querySelector('.close');
const cartItems = document.getElementById('cartItems');
const totalAmount = document.getElementById('totalAmount');
const cartCount = document.getElementById('cartCount');

// Display Menu
function displayMenu(filter = 'all') {
    menuContainer.innerHTML = '';
    
    const displayCategory = (category, items, isVeg) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        categorySection.appendChild(categoryTitle);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'items-container';
        
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            
            const icon = document.createElement('span');
            icon.className = isVeg ? 'veg-icon' : 'non-veg-icon';
            icon.innerHTML = isVeg ? '🟢' : '🔴';
            
            menuItem.innerHTML = `
                ${icon.outerHTML}
                <h3>${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <p class="price">₹${item.price}</p>
                <button class="add-to-cart" onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
            `;
            
            itemsContainer.appendChild(menuItem);
        });
        
        categorySection.appendChild(itemsContainer);
        menuContainer.appendChild(categorySection);
    };
    
    if (filter === 'all' || filter === 'veg') {
        Object.entries(menuData.vegetarian).forEach(([category, items]) => {
            displayCategory(category, items, true);
        });
    }
    
    if (filter === 'all' || filter === 'non-veg') {
        Object.entries(menuData.nonVegetarian).forEach(([category, items]) => {
            displayCategory(category, items, false);
        });
    }
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Filter buttons
showAllBtn.addEventListener('click', () => {
    setActiveButton(showAllBtn);
    displayMenu('all');
});

vegBtn.addEventListener('click', () => {
    setActiveButton(vegBtn);
    displayMenu('veg');
});

nonVegBtn.addEventListener('click', () => {
    setActiveButton(nonVegBtn);
    displayMenu('non-veg');
});

function setActiveButton(activeBtn) {
    [showAllBtn, vegBtn, nonVegBtn].forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

// Cart functionality
let cart = [];

function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
    showAddedToCartNotification(name);
}

function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalAmount.textContent = '0';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="quantity-controls">
                    <button onclick="decreaseQuantity('${item.name}')" class="quantity-btn">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button onclick="increaseQuantity('${item.name}')" class="quantity-btn">+</button>
                </div>
            </div>
            <div class="cart-item-price">
                <p>₹${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')" class="remove-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const deliveryCharge = calculateDeliveryCharge(subtotal);
    const total = subtotal + tax + deliveryCharge;
    
    // Update the cart summary
    document.getElementById('cartItems').insertAdjacentHTML('afterend', `
        <div class="cart-summary">
            <div class="summary-item">
                <span>Subtotal:</span>
                <span>₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span>Tax (5%):</span>
                <span>₹${tax.toFixed(2)}</span>
            </div>
            <div class="summary-item">
                <span>Delivery Charge:</span>
                <span>₹${deliveryCharge.toFixed(2)}</span>
            </div>
            <div class="summary-item total">
                <span>Total:</span>
                <span>₹${total.toFixed(2)}</span>
            </div>
        </div>
    `);
    
    totalAmount.textContent = total.toFixed(2);
}

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateTax(subtotal) {
    return subtotal * 0.05; // 5% tax
}

function calculateDeliveryCharge(subtotal) {
    return subtotal >= 1000 ? 0 : 50; // Free delivery for orders above ₹1000
}

function increaseQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += 1;
        updateCart();
    }
}

function decreaseQuantity(name) {
    const item = cart.find(item => item.name === name);
    if (item && item.quantity > 1) {
        item.quantity -= 1;
        updateCart();
    } else if (item && item.quantity === 1) {
        removeFromCart(name);
    }
}

function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function showAddedToCartNotification(itemName) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        ${itemName} added to cart
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Cart modal functionality
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'block';
    updateCart();
});

closeBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Please add items to your cart before checking out.');
        return;
    }
    
    const total = calculateSubtotal() + calculateTax(calculateSubtotal()) + calculateDeliveryCharge(calculateSubtotal());
    alert(`Order placed successfully! Total amount: ₹${total.toFixed(2)}\nThank you for your order!`);
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});

// Initialize the menu
displayMenu('all');
