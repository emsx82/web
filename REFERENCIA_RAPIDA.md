# 🚀 Referencia Rápida - Nike Montecer Store

## Ejemplos Prácticos y Snippets

---

## 📦 Agregar un Nuevo Producto

### Ubicación: `script.js` (línea ~10)

```javascript
{
    id: 11,  // Incrementa el número
    name: 'Nike Zoom Pegasus',
    category: 'hombre',  // Categorías: 'hombre', 'mujer', 'nino', 'nina'
    price: 135.00,
    description: 'Zapatilla ligera para correr en asfalto',
    sizes: ['7', '8', '9', '10', '11', '12'],  // Según categoría
    badge: 'Nuevo',  // Opcional: 'Nuevo' o 'Popular'
    image: 'imagen/nike-zoom-pegasus.jpg'
}
```

**Tallas por Categoría:**
- Hombre/Mujer: ['5', '6', '7', '8', '9', '10', '11', '12']
- Niño/Niña: ['1', '2', '3', '4', '5', '6']

---

## 🎨 Cambiar Colores Principales

### Ubicación: `styles.css` (línea 18)

```css
:root {
    /* Cambia estos valores por tus colores */
    --primary-color: #ff0000;           /* Rojo Nike → Tu color */
    --secondary-color: #000000;         /* Negro → Tu color */
    --accent-color: #ffffff;            /* Blanco → Tu color */
    
    /* Opcional: Personalizar sombras y gradientes */
    --shadow-small: 0 2px 10px rgba(0, 0, 0, 0.1);
    --shadow-medium: 0 5px 20px rgba(0, 0, 0, 0.2);
    --gradient-1: linear-gradient(135deg, #ff0000 0%, #000000 100%);
}
```

---

## 📧 Cambiar Información de Contacto

### Ubicación: `index.html` (búscar "contact-info")

```html
<!-- INFORMACIÓN A CAMBIAR -->
<p>Edgar Montececer</p>              <!-- Tu nombre -->
<p>montecer@gmail.com</p>            <!-- Tu email -->
<p>6885-6789</p>                     <!-- Tu teléfono -->
<p>Changuinola, Bocas del Toro, Panamá</p>  <!-- Tu ubicación -->

<!-- REDES SOCIALES -->
<a href="https://facebook.com/tu-pagina"><i class="fab fa-facebook"></i></a>
<a href="https://instagram.com/tu-usuario"><i class="fab fa-instagram"></i></a>
<a href="https://twitter.com/tu-usuario"><i class="fab fa-twitter"></i></a>
<a href="https://wa.me/tu-numero"><i class="fab fa-whatsapp"></i></a>
```

---

## 🎯 Ejemplos de Funciones JavaScript

### Agregar Producto al Carrito
```javascript
// Forma 1: Con talla específica
addToCart(1, '10');  // ID producto 1, talla 10

// Forma 2: Forma rápida (primera talla disponible)
quickAddToCart(1);
```

### Abrir/Cerrar Modales
```javascript
// Abrir modal
openModal('cartModal');          // Ver carrito
openModal('loginModal');         // Login
openModal('registerModal');      // Registro
openModal('productModal');       // Detalle de producto

// Cerrar modal
closeModal('cartModal');

// Cambiar entre modales
switchModal('loginModal', 'registerModal');
```

### Mostrar Notificaciones
```javascript
// Notificación de éxito (verde)
showNotification('Producto agregado al carrito', 'success');

// Notificación de error (rojo)
showNotification('Debes seleccionar una talla', 'error');

// Notificación de advertencia (amarillo)
showNotification('Este producto está casi agotado', 'warning');
```

### Filtrar Productos
```javascript
// Filtrar por categoría
filterByCategory('hombre');    // Solo hombres
filterByCategory('mujer');     // Solo mujeres
filterByCategory('nino');      // Solo niños
filterByCategory('nina');      // Solo niñas
filterByCategory('all');       // Todos los productos
```

### Renderizar Componentes
```javascript
// Renderizar productos en la página
renderProducts();

// Renderizar carrito
renderCart();

// Abrir modal de producto
openProductModal(1);  // ID del producto
```

---

## 🛒 Gestión del Carrito

### Operaciones Básicas
```javascript
// Ver carrito
openCart();

// Actualizar cantidad
updateQuantity(productId, size, +1);   // Aumenta 1
updateQuantity(productId, size, -1);   // Disminuye 1

// Eliminar producto
removeFromCart(productId, size);

// Limpiar carrito (manual)
cart = [];
updateCartCount();
```

### Estructura del Carrito
```javascript
// El carrito es un array de objetos:
let cart = [
    {
        id: 1,
        name: 'Nike Air Max 270',
        price: 150.00,
        size: '10',
        quantity: 1
    },
    {
        id: 4,
        name: 'Nike Air Max 97',
        price: 140.00,
        size: '8',
        quantity: 2
    }
];
```

---

## 💳 Métodos de Pago

### Métodos Disponibles
```javascript
// Cuando el usuario selecciona el método:
paymentMethod = 'visa';    // Tarjeta VISA
paymentMethod = 'clave';   // Sistema Clave de Panamá
paymentMethod = 'yappy';   // App Yappy
```

### Validar Método de Pago
```javascript
const paymentMethod = document.getElementById('paymentMethod').value;

if (!paymentMethod) {
    showNotification('Selecciona un método de pago', 'error');
    return;
}
```

---

## 🎨 Personalizar Animaciones

### Ubicación: `styles.css` (búsca "ANIMACIONES")

```css
/* Ejemplo: Cambiar duración de animación */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Aplicar a elemento */
.elemento {
    animation: fadeIn 1s ease-out;  /* 1s = duración */
}

/* Aumentar duración a 2 segundos */
.elemento {
    animation: fadeIn 2s ease-out;  /* Más lenta */
}
```

### Crear Nueva Animación
```css
@keyframes miAnimacion {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.elemento {
    animation: miAnimacion 0.5s ease-in-out;
}
```

---

## 📱 Responsive Design

### Media Queries en `styles.css`

```css
/* Pantallas pequeñas (móviles) */
@media (max-width: 768px) {
    .navbar { padding: 0.5rem 1rem; }
    .hero-title { font-size: 2rem; }
}

/* Pantallas medianas (tablets) */
@media (max-width: 968px) {
    .nav-menu { position: fixed; }
    .about-content { grid-template-columns: 1fr; }
}

/* Pantallas grandes (desktop) */
@media (min-width: 1200px) {
    .container { max-width: 1200px; }
}
```

---

## 🔧 Modificar Estilos de Botones

### Ubicación: `styles.css` (búsca "filter-btn")

```css
.mi-boton {
    padding: 0.7rem 1.5rem;         /* Espaciado interno */
    background: #ff0000;             /* Color de fondo */
    color: white;                    /* Color de texto */
    border: 2px solid #ff0000;      /* Borde */
    border-radius: 25px;             /* Redondez */
    font-weight: bold;               /* Peso del texto */
    cursor: pointer;                 /* Cursor tipo mano */
    transition: all 0.3s ease;       /* Transición suave */
}

.mi-boton:hover {
    background: #000000;             /* Color al pasar mouse */
    transform: scale(1.05);          /* Agrandar un poco */
}
```

---

## 📊 Acceder a Datos del Producto

### En JavaScript
```javascript
// Obtener producto por ID
const product = products.find(p => p.id === 1);
console.log(product.name);          // "Nike Air Max 270"
console.log(product.price);         // 150.00
console.log(product.sizes);         // ['7', '8', '9', ...]

// Obtener todos los productos de una categoría
const hombres = products.filter(p => p.category === 'hombre');
console.log(hombres.length);        // Cantidad de productos

// Obtener precio total del carrito
const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(total);                 // $450.00
```

---

## 🐛 Debug y Consola

### En la Consola del Navegador (F12)

```javascript
// Ver todos los productos
console.log(products);

// Ver carrito actual
console.log(cart);

// Ver categoría activa
console.log(activeCategory);

// Agregar producto de prueba
addToCart(1, '10');

// Ver contador del carrito
console.log(document.getElementById('cartCount').textContent);
```

---

## 📝 Validaciones Útiles

### Email Válido
```javascript
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Usar
if (!isValidEmail('correo@ejemplo.com')) {
    showNotification('Email no válido', 'error');
}
```

### Teléfono Válido
```javascript
function isValidPhone(phone) {
    return /^[0-9]{4}-[0-9]{4}$/.test(phone);  // 6885-6789
}
```

### Tarjeta Válida
```javascript
function isValidCardNumber(cardNum) {
    return /^\d{16}$/.test(cardNum.replace(/\s/g, ''));
}
```

---

## 🌐 URLs Útiles

### CDN de Font Awesome
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## 💡 Tips y Trucos

### **Tip 1: Usar LocalStorage para persistencia**
```javascript
// Guardar carrito
localStorage.setItem('miCarrito', JSON.stringify(cart));

// Cargar carrito
const carroGuardado = JSON.parse(localStorage.getItem('miCarrito'));
```

### **Tip 2: Agregar más métodos de pago**
En `script.js`, función `updatePaymentFields()`:
```javascript
else if (paymentMethod === 'creditoplus') {
    paymentDetails.innerHTML = `...`;
}
```

### **Tip 3: Cambiar lenguaje de categorías**
En `script.js`, función `getCategoryName()`:
```javascript
const names = {
    'hombre': 'Men',
    'mujer': 'Women',
    'nino': 'Boys',
    'nina': 'Girls'
};
```

### **Tip 4: Agregar descuentos**
```javascript
function applyDiscount(total, discountPercent) {
    return total * (1 - discountPercent / 100);
}
```

---

## ⚡ Atajos Útiles

| Atajo | Acción |
|---|---|
| `F12` | Abrir consola del navegador |
| `Ctrl+Shift+Delete` | Limpiar caché |
| `Ctrl+U` | Ver código fuente |
| `Right Click → Inspect` | Inspeccionar elemento |

---

## 📚 Recursos Adicionales

- [MDN - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS-Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Responsively App](https://responsively.app/)

---

## 🎓 Estructura JSON de Producto

```json
{
    "id": 1,
    "name": "Nike Air Max 270",
    "category": "hombre",
    "price": 150.00,
    "description": "Zapatillas deportivas con tecnología Air Max",
    "sizes": ["7", "8", "9", "10"],
    "badge": "Nuevo",
    "image": "imagen/nike-air-max-270-hombre.jpg"
}
```

---

## 🎯 Checklist de Personalización

Usa esto para personalizar tu tienda:

- [ ] Cambiar paleta de colores
- [ ] Actualizar información de contacto
- [ ] Agregar más productos
- [ ] Cambiar logo/nombre
- [ ] Personalizar animaciones
- [ ] Agregar más métodos de pago
- [ ] Integrar con backend
- [ ] Agregar más categorías
- [ ] Cambiar imágenes
- [ ] Traducir a otro idioma

---

## 🚀 Próximas Características

Ideas para extender el proyecto:

```javascript
// Sistema de puntos de cliente
function addPoints(customerId, points) { }

// Cupones de descuento
function applyCoupon(code) { }

// Búsqueda de productos
function searchProducts(query) { }

// Ordenar por precio
function sortBy(criteria) { }

// Reseñas de productos
function addReview(productId, rating, comment) { }
```

---

**¡Espero que esta referencia rápida te sea útil!** 🚀

Para ayuda adicional, consulta [GUIA_PROYECTO.md](GUIA_PROYECTO.md)

**"Just Do It"** ✨
