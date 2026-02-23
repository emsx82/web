// ============================================
// VARIABLES GLOBALES Y DATOS DE PRODUCTOS
// ============================================

// Array de productos de la tienda con imágenes locales
let products = [
    // Productos para Hombre
    {
        id: 1,
        name: 'Nike Air Max 270',
        category: 'hombre',
        price: 150.00,
        description: 'Zapatillas deportivas con tecnología Air Max para máxima comodidad',
        sizes: ['7', '8', '9', '10', '11', '12'],
        badge: 'Nuevo',
        image: 'imagen/nike air max 270 hombre.jpg'
    },
    {
        id: 2,
        name: 'Nike React Infinity',
        category: 'hombre',
        price: 160.00,
        description: 'Diseñadas para corredores, con amortiguación React',
        sizes: ['7', '8', '9', '10', '11', '12'],
        image: 'imagen/nike react infinity hombre.jpg'
    },
    {
        id: 3,
        name: 'Nike Air Force 1',
        category: 'hombre',
        price: 120.00,
        description: 'Clásico icónico urbano para uso diario',
        sizes: ['7', '8', '9', '10', '11', '12'],
        image: 'imagen/nike four one hombre.jpg'
    },
    
    // Productos para Mujer
    {
        id: 4,
        name: 'Nike Air Max 97',
        category: 'mujer',
        price: 140.00,
        description: 'Estilo retro con líneas onduladas y máxima comodidad',
        sizes: ['5', '6', '7', '8', '9', '10'],
        badge: 'Popular',
        image: 'imagen/nike air max 97 mujer.jpg'
    },
    {
        id: 5,
        name: 'Nike Pegasus 38',
        category: 'mujer',
        price: 130.00,
        description: 'Perfectas para running con respuesta rápida',
        sizes: ['5', '6', '7', '8', '9', '10'],
        image: 'imagen/nike pegasus 38 mujer.jpg'
    },
    {
        id: 6,
        name: 'Nike Blazer Mid',
        category: 'mujer',
        price: 110.00,
        description: 'Estilo vintage con corte medio',
        sizes: ['5', '6', '7', '8', '9', '10'],
        image: 'imagen/nike blazer mid mujer.jpg'
    },
    
    // Productos para Niño
    {
        id: 7,
        name: 'Nike Air Max 90 Kids',
        category: 'nino',
        price: 80.00,
        description: 'Versión para niños del clásico Air Max 90',
        sizes: ['1', '2', '3', '4', '5', '6'],
        badge: 'Nuevo',
        image: 'imagen/nike air  max 90 kids niño.jpg'
    },
    {
        id: 8,
        name: 'Nike Revolution Kids',
        category: 'nino',
        price: 70.00,
        description: 'Comodidad y durabilidad para pequeños atletas',
        sizes: ['1', '2', '3', '4', '5', '6'],
        image: 'imagen/nike revolution kids niño.jpg'
    },
    
    // Productos para Niña
    {
        id: 9,
        name: 'Nike Air Force 1 Kids',
        category: 'nina',
        price: 75.00,
        description: 'El clásico adaptado para niñas con colores vibrantes',
        sizes: ['1', '2', '3', '4', '5', '6'],
        badge: 'Popular',
        image: 'imagen/nike air force 1 kids niña.jpg'
    },
    {
        id: 10,
        name: 'Nike Star Runner Kids',
        category: 'nina',
        price: 65.00,
        description: 'Ligeras y flexibles para el día a día',
        sizes: ['1', '2', '3', '4', '5', '6'],
        image: 'imagen/nike  star  runner kids niña.jpg'
    }
];

// Carrito de compras (almacena productos agregados)
let cart = [];

// Categoría activa para filtros
let activeCategory = 'all';

// Información de envío seleccionada
let shippingCost = 0;
let selectedProvince = '';

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar productos iniciales
    renderProducts();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Actualizar contador del carrito
    updateCartCount();
});

// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

/**
 * Renderiza los productos en el grid según la categoría activa
 */
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    // Filtrar productos según categoría activa
    let filteredProducts = activeCategory === 'all' 
        ? products 
        : products.filter(p => p.category === activeCategory);
    
    // Limpiar grid
    productsGrid.innerHTML = '';
    
    // Si no hay productos, mostrar mensaje
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 2rem;">No hay productos en esta categoría</p>';
        return;
    }
    
    // Crear tarjetas de productos
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.onclick = () => openProductModal(product.id);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${getCategoryName(product.category)}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price.toFixed(2)}</p>
                <button class="product-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

/**
 * Convierte el código de categoría a nombre legible
 */
function getCategoryName(category) {
    const names = {
        'hombre': 'Hombre',
        'mujer': 'Mujer',
        'nino': 'Niño',
        'nina': 'Niña'
    };
    return names[category] || category;
}

// ============================================
// FUNCIONES DE FILTRADO
// ============================================

/**
 * Filtra productos por categoría
 */
function filterByCategory(category) {
    activeCategory = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar botón correspondiente
    event.target.classList.add('active');
    
    // Renderizar productos filtrados
    renderProducts();
    
    // Scroll a sección de productos
    scrollToSection('products');
}

// ============================================
// FUNCIONES DE NAVEGACIÓN
// ============================================

/**
 * Hace scroll suave a una sección
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 80; // Altura del navbar
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

/**
 * Configura navegación activa según scroll
 */
function setupScrollNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// FUNCIONES DE MODALES
// ============================================

/**
 * Abre un modal específico
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Cierra un modal específico
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

/**
 * Cambia de un modal a otro
 */
function switchModal(fromModalId, toModalId) {
    closeModal(fromModalId);
    setTimeout(() => openModal(toModalId), 300);
}

/**
 * Cierra modal al hacer click fuera del contenido
 */
function setupModalClosing() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

// ============================================
// FUNCIONES DE PRODUCTO
// ============================================

/**
 * Abre el modal de detalle de producto
 */
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalContent = document.getElementById('productModalContent');
    
    modalContent.innerHTML = `
        <div class="product-modal-image">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 10px;">
        </div>
        <div class="product-modal-details">
            <h2>${product.name}</h2>
            <p class="product-category">${getCategoryName(product.category)}</p>
            <p class="product-modal-price">${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            
            <div class="size-selector">
                <h4>Selecciona tu talla:</h4>
                <div class="size-buttons" id="sizeButtons">
                    ${product.sizes.map(size => `
                        <button class="size-btn" onclick="selectSize(this, '${size}')">${size}</button>
                    `).join('')}
                </div>
            </div>
            
            <button class="add-to-cart-btn" onclick="addToCartFromModal(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Agregar al Carrito
            </button>
        </div>
    `;
    
    openModal('productModal');
}

/**
 * Selecciona una talla
 */
function selectSize(button, size) {
    // Remover selección anterior
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar botón seleccionado
    button.classList.add('active');
    button.dataset.selected = size;
}

/**
 * Agrega producto al carrito desde el modal de detalle
 */
function addToCartFromModal(productId) {
    const selectedSizeBtn = document.querySelector('.size-btn.active');
    
    if (!selectedSizeBtn) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    const size = selectedSizeBtn.dataset.selected;
    addToCart(productId, size);
    closeModal('productModal');
}

/**
 * Agrega rápidamente un producto al carrito (talla por defecto)
 */
function quickAddToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Usar la primera talla disponible como predeterminada
    const defaultSize = product.sizes[0];
    addToCart(productId, defaultSize);
}

// ============================================
// FUNCIONES DE CARRITO
// ============================================

/**
 * Agrega un producto al carrito
 */
function addToCart(productId, size) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Verificar si el producto con esa talla ya está en el carrito
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            size: size,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification('Producto agregado al carrito');
}

/**
 * Actualiza el contador de productos en el carrito
 */
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

/**
 * Abre el modal del carrito
 */
function openCart() {
    renderCart();
    openModal('cartModal');
}

/**
 * Renderiza el contenido del carrito
 */
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">Tu carrito está vacío</p>';
        updateCartSummary();
        return;
    }
    
    cartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${product.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-size">Talla: ${item.size}</div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, '${item.size}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, '${item.size}', 1)">+</button>
                </div>
            </div>
            <div class="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeFromCart(${item.id}, '${item.size}')">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `}).join('');
    
    updateCartSummary();
}

/**
 * Actualiza la cantidad de un producto en el carrito
 */
function updateQuantity(productId, size, change) {
    const item = cart.find(i => i.id === productId && i.size === size);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId, size);
    } else {
        renderCart();
        updateCartCount();
    }
}

/**
 * Elimina un producto del carrito
 */
function removeFromCart(productId, size) {
    cart = cart.filter(item => !(item.id === productId && item.size === size));
    renderCart();
    updateCartCount();
}

/**
 * Actualiza el resumen de costos del carrito
 */
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = shippingCost > 0 ? shippingCost : (cart.length > 0 ? 5.00 : 0);
    const total = subtotal + shipping;
    
    document.getElementById('cartSubtotal').textContent = `${subtotal.toFixed(2)}`;
    document.getElementById('cartShipping').textContent = `${shipping.toFixed(2)}`;
    document.getElementById('cartTotal').textContent = `${total.toFixed(2)}`;
}

// ============================================
// FUNCIONES DE CHECKOUT
// ============================================

/**
 * Abre el modal de checkout
 */
function openCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    closeModal('cartModal');
    setTimeout(() => openModal('checkoutModal'), 300);
}

/**
 * Calcula el costo de envío según la provincia
 */
function calculateShipping() {
    const provinceSelect = document.getElementById('province');
    const selectedOption = provinceSelect.options[provinceSelect.selectedIndex];
    const shippingInfo = document.getElementById('shippingInfo');
    
    if (selectedOption.value) {
        shippingCost = parseFloat(selectedOption.dataset.shipping);
        selectedProvince = selectedOption.text;
        shippingInfo.style.display = 'block';
    } else {
        shippingCost = 0;
        selectedProvince = '';
        shippingInfo.style.display = 'none';
    }
}

/**
 * Cambia los campos de pago según el método seleccionado
 */
function updatePaymentFields() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const paymentDetails = document.getElementById('paymentDetails');
    
    if (paymentMethod === 'visa') {
        paymentDetails.innerHTML = `
            <h4>💳 Datos de Tarjeta VISA</h4>
            <input type="text" placeholder="Número de Tarjeta (16 dígitos)" maxlength="19" required>
            <input type="text" placeholder="Nombre en la Tarjeta" required>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <input type="text" placeholder="MM/AA" maxlength="5" required>
                <input type="text" placeholder="CVV" maxlength="3" required>
            </div>
        `;
    } else if (paymentMethod === 'yappy') {
        paymentDetails.innerHTML = `
            <h4>📱 Pago con Yappy</h4>
            <input type="tel" placeholder="Número de Teléfono Yappy (Ej: 6885-6789)" required>
            <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                <p style="color: #856404; margin: 0; font-size: 0.9rem;">
                    <i class="fas fa-info-circle"></i>
                    Recibirás una notificación en tu app Yappy para confirmar el pago.
                </p>
            </div>
        `;
    } else if (paymentMethod === 'paypal') {
        paymentDetails.innerHTML = `
            <h4>🅿️ Pago con PayPal</h4>
            <input type="email" placeholder="Correo Electrónico de PayPal" required>
            <div style="background: #e3f2fd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                <p style="color: #1976d2; margin: 0; font-size: 0.9rem;">
                    <i class="fas fa-shield-alt"></i>
                    Serás redirigido a PayPal para completar el pago de forma segura.
                </p>
            </div>
        `;
    } else {
        paymentDetails.innerHTML = '';
    }
}

/**
 * Procesa la confirmación de compra
 */
function processCheckout() {
    // Obtener datos del formulario
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const provinceSelect = document.getElementById('province');
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Validar que se haya seleccionado provincia
    if (!provinceSelect.value) {
        alert('Por favor selecciona una provincia de entrega');
        return;
    }
    
    // Generar número de pedido aleatorio
    const orderNumber = 'NMS-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Calcular totales
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + shippingCost;
    
    // Crear resumen del pedido
    const orderSummary = `
        <p><strong>Cliente:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Método de pago:</strong> ${getPaymentMethodName(paymentMethod)}</p>
        <hr style="margin: 1rem 0;">
        <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
        <p><strong>Envío:</strong> ${shippingCost.toFixed(2)}</p>
        <p style="font-size: 1.2rem; color: var(--primary-color);"><strong>TOTAL:</strong> ${total.toFixed(2)}</p>
    `;
    
    // Mostrar información en modal de confirmación
    document.getElementById('orderNumber').textContent = orderNumber;
    document.getElementById('deliveryProvince').textContent = provinceSelect.options[provinceSelect.selectedIndex].text;
    document.getElementById('deliveryShipping').textContent = `${shippingCost.toFixed(2)}`;
    document.getElementById('orderSummary').innerHTML = orderSummary;
    
    // Limpiar carrito
    cart = [];
    updateCartCount();
    shippingCost = 0;
    selectedProvince = '';
    
    // Cerrar modal de checkout y abrir confirmación
    closeModal('checkoutModal');
    setTimeout(() => openModal('confirmationModal'), 300);
}

/**
 * Obtiene el nombre del método de pago
 */
function getPaymentMethodName(method) {
    const methods = {
        'visa': '💳 Tarjeta VISA',
        'yappy': '📱 Yappy',
        'paypal': '🅿️ PayPal'
    };
    return methods[method] || method;
}

// ============================================
// FUNCIONES DE FORMULARIOS
// ============================================

/**
 * Maneja el envío de formularios
 */
function setupFormHandlers() {
    // Formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Sesión iniciada correctamente');
            closeModal('loginModal');
        });
    }
    
    // Formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Cuenta creada correctamente');
            closeModal('registerModal');
        });
    }
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Mensaje enviado. Te contactaremos pronto.');
            contactForm.reset();
        });
    }
    
    // Formulario de checkout
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            processCheckout();
        });
    }
}

// ============================================
// FUNCIONES DE UI/UX
// ============================================

/**
 * Muestra una notificación temporal
 */
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #00c853;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Configura el menú móvil
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Cambiar icono
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Cerrar menú al hacer click en un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// ============================================
// CONFIGURACIÓN DE EVENT LISTENERS
// ============================================

/**
 * Configura todos los event listeners necesarios
 */
function setupEventListeners() {
    // Botón de login
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => openModal('loginModal'));
    }
    
    // Botón de carrito
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    // Cambio en método de pago
    const paymentMethod = document.getElementById('paymentMethod');
    if (paymentMethod) {
        paymentMethod.addEventListener('change', updatePaymentFields);
    }
    
    // Navegación con scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
    
    // Configurar formularios
    setupFormHandlers();
    
    // Configurar cierre de modales
    setupModalClosing();
    
    // Configurar menú móvil
    setupMobileMenu();
    
    // Configurar navegación activa con scroll
    setupScrollNavigation();
}

// ============================================
// ANIMACIONES CSS ADICIONALES
// ============================================

// Agregar estilos de animación para notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);