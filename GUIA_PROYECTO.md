# 🏪 Nike Montecer Store - Guía Completa del Proyecto

## 📋 Introducción

Bienvenido a **Nike Montecer Store**, un e-commerce moderno y profesional de zapatillas Nike para toda la familia (hombre, mujer, niño, niña). Este proyecto está desarrollado con HTML5, CSS3 y JavaScript vanilla, sin dependencias externas (excepto Font Awesome para iconos).

---

## 📁 Estructura del Proyecto

```
nike-montecer-store/
├── index.html          # Código HTML principal
├── styles.css          # Estilos CSS (responsive y animaciones)
├── script.js           # Lógica JavaScript
├── imagen/             # Carpeta con imágenes de productos
│   ├── nike air max 270 hombre.jpg
│   ├── nike react infinity hombre.jpg
│   ├── nike four one hombre.jpg
│   ├── nike air max 97 mujer.jpg
│   ├── nike pegasus 38 mujer.jpg
│   ├── nike blazer mid mujer.jpg
│   ├── nike air max 90 kids niño.jpg
│   ├── nike revolution kids niño.jpg
│   ├── nike air force 1 kids niña.jpg
│   └── nike star runner kids niña.jpg
└── GUIA_PROYECTO.md    # Este archivo
```

---

## 🎨 Características Principales

### 1. **Navegación Responsive**
- Header fijo con logo y menú
- Menú hamburguesa para dispositivos móviles
- Navegación fluida con scroll suave
- Indicador visual de sección activa

### 2. **Banner Principal (Hero Section)**
- Imagen de fondo animada con gradiente dinámico
- Animaciones de fade-in en cascada
- Call-to-Action (CTA) con efecto hover
- Indicador de scroll animado

### 3. **Categorías de Productos**
- 4 categorías: Hombre, Mujer, Niño, Niña
- Tarjetas con iconos y efectos de rotación
- Filtrado de productos por categoría

### 4. **Galería de Productos**
- Grid responsive que se adapta al tamaño de pantalla
- Búsqueda y filtrado por categoría
- Tarjetas con imagen, nombre, precio y botones
- Badges de "Nuevo" y "Popular"
- Modal de vista detallada

### 5. **Sistema de Carrito**
- Agregar/eliminar productos
- Selector de tallas
- Actualización de cantidades
- Carrito con resumen de costos
- Contador en tiempo real

### 6. **Proceso de Pago**
- Tres métodos de pago:
  - Tarjeta VISA
  - Clave de Panamá
  - Yappy
- Formulario de envío
- Validación de datos
- Confirmación de pedido

### 7. **Gestión de Cuenta**
- Modal de login
- Modal de registro con validaciones
- Cambio entre modales

### 8. **Sección Sobre Nosotros**
- Misión y visión de la tienda
- Valores corporativos
- Estadísticas (clientes, productos, calificación)

### 9. **Reflexión Inspiradora**
- Mensaje sobre el deporte y estilo de vida saludable
- Filosofía de la marca Nike
- Motivación para los clientes

### 10. **Formulario de Contacto**
- Información de la tienda
- Propietario: Edgar Montececer
- Correo: montecer@gmail.com
- Teléfono: 6885-6789
- Enlaces de redes sociales
- Formulario para mensajes

### 11. **Footer**
- Enlaces rápidos
- Información de horario
- Copyright y disclaimer

---

## 🖥️ Tecnologías Utilizadas

### **Frontend**
- **HTML5**: Estructura semántica
- **CSS3**: 
  - Flexbox y Grid
  - Animaciones y transiciones
  - Responsividad con Media Queries
  - Variables CSS para fácil personalización
- **JavaScript Vanilla**: 
  - DOM manipulation
  - Event listeners
  - Local storage (carrito)

### **Librerías Externas**
- **Font Awesome 6.4.0**: Iconos profesionales
- **Google Fonts**: Tipografía (disponible si se desea)

---

## 🎯 Funcionalidades en Detalle

### **Renderizado de Productos**
```javascript
renderProducts()
```
- Filtra productos según categoría activa
- Crea tarjetas dinámicamente
- Muestra badges especiales

### **Gestión del Carrito**
```javascript
addToCart(productId, size)        // Agregar producto
removeFromCart(productId, size)    // Eliminar producto
updateQuantity(productId, size, change)  // Cambiar cantidad
```

### **Modales**
```javascript
openModal(modalId)      // Abre un modal
closeModal(modalId)     // Cierra un modal
switchModal(from, to)   // Cambia entre modales
```

### **Notificaciones**
```javascript
showNotification(message, type)  // type: 'success', 'error', 'warning'
```

### **Checkout**
```javascript
processCheckout()        // Procesa la compra
updatePaymentFields()   // Actualiza campos de pago según método
```

---

## 🎨 Paleta de Colores

```css
--primary-color: #ff0000      /* Rojo Nike */
--secondary-color: #000000    /* Negro */
--accent-color: #ffffff       /* Blanco */
--text-dark: #1a1a1a         /* Gris oscuro */
--text-light: #f5f5f5        /* Gris claro */
```

---

## 📱 Responsividad

El proyecto es completamente responsive con breakpoints en:

- **Desktop**: > 1200px
- **Tablet**: 768px - 1200px
- **Mobile**: < 768px

### Mobile Features:
- Menú hamburguesa
- Grid de productos de 2-3 columnas
- Modales adaptados
- Textos redimensionados
- Espaciado optimizado

---

## ✨ Animaciones Principales

### **CSS Animations**
- `fadeIn`: Desvanecimiento suave (1s)
- `gradientShift`: Gradiente animado (15s)
- `bounce`: Rebote del indicador (2s)
- `slideInRight`: Entrada desde derecha
- `slideOutRight`: Salida hacia derecha
- `modalSlideIn`: Entrada del modal
- `pulse`: Pulso de escala
- `ripple`: Efecto ondulante en botones

### **Transiciones**
- Hover effects suaves (0.3s)
- Transform en tarjetas
- Color transitions

---

## 🔒 Seguridad y Validaciones

El proyecto incluye validaciones en:

1. **Carrito**: No permite tallas sin seleccionar
2. **Registro**: 
   - Validación de contraseña (mínimo 6 caracteres)
   - Confirmación de contraseña
3. **Checkout**: 
   - Método de pago obligatorio
   - Todos los campos requeridos
4. **Contacto**: 
   - Campos requeridos
   - Validación de email

---

## 📊 Productos Ejemplo

### Hombre
- Nike Air Max 270 - $150.00
- Nike React Infinity - $160.00
- Nike Air Force 1 - $120.00

### Mujer
- Nike Air Max 97 - $140.00
- Nike Pegasus 38 - $130.00
- Nike Blazer Mid - $110.00

### Niño
- Nike Air Max 90 Kids - $80.00
- Nike Revolution Kids - $70.00

### Niña
- Nike Air Force 1 Kids - $75.00
- Nike Star Runner Kids - $65.00

---

## 🚀 Cómo Usar

### **Abrir en VS Code**
1. Abre la carpeta del proyecto en VS Code
2. Click derecho en `index.html`
3. Selecciona "Abrir con Live Server" (si tienes la extensión instalada)
4. O abre directamente en el navegador: `Ctrl+Shift+P` → "Live Server"

### **Sin Live Server**
1. Abre `index.html` directamente en tu navegador
2. O arrastra el archivo al navegador

### **Funcionalidades Básicas**

**Explorar Productos:**
- Scroll hacia abajo
- Click en categoría
- Usa los filtros

**Agregar al Carrito:**
- Click en "Agregar al Carrito" en la tarjeta
- O click en producto → Selecciona talla → Agregar

**Comprar:**
- Click en icono de carrito
- Revisa productos
- "Proceder al Pago"
- Completa formulario
- Selecciona método de pago
- Confirma compra

**Contacto:**
- Scroll a footer
- Completa formulario de contacto
- O llama: 6885-6789

---

## 🛠️ Personalización

### **Cambiar Colores**
En `styles.css`, línea 18-24:
```css
:root {
    --primary-color: #ff0000;      /* Cambia el rojo */
    --secondary-color: #000000;    /* Cambia el negro */
    --accent-color: #ffffff;       /* Cambia el blanco */
}
```

### **Agregar Productos**
En `script.js`, en el array `products`:
```javascript
{
    id: 11,
    name: 'Nike [Modelo]',
    category: 'hombre|mujer|nino|nina',
    price: 0.00,
    description: 'Descripción del producto',
    sizes: ['7', '8', '9'],
    badge: 'Nuevo',
    image: 'imagen/nombre-imagen.jpg'
}
```

### **Cambiar Información de Contacto**
En `index.html`, busca la sección de `contact-info` y actualiza:
- Nombre: Edgar Montececer
- Email: montecer@gmail.com
- Teléfono: 6885-6789

---

## 🐛 Troubleshooting

### **Las imágenes no cargan**
- Verifica que la carpeta `imagen/` esté en el mismo directorio
- Verifica los nombres de los archivos (son sensibles a mayúsculas/minúsculas)
- Usa la ruta relativa: `imagen/nombre-archivo.jpg`

### **Los estilos no se aplican**
- Limpia el caché del navegador (Ctrl+Shift+Delete)
- Verifica que `styles.css` esté en la misma carpeta
- Abre en una pestaña nueva

### **El carrito no guarda datos**
- El carrito es temporal (se limpia al refresca la página)
- Para persistencia, se podría agregar LocalStorage

### **Los modales no funcionan**
- Verifica que JavaScript esté habilitado
- Abre la consola (F12) para ver errores
- Verifica que todos los archivos `.js` estén correctos

---

## 📈 Mejoras Futuras Posibles

1. **Backend**
   - Integración con base de datos
   - Sistema de autenticación real
   - Procesamiento de pagos real

2. **Frontend**
   - LocalStorage para persistencia del carrito
   - Búsqueda de productos
   - Carrito persistente entre sesiones
   - Sistema de reseñas
   - Wishlist

3. **UX/UI**
   - Modo oscuro
   - Más animaciones
   - Zoom en imágenes del producto
   - Galerías de imágenes

4. **Performance**
   - Lazy loading de imágenes
   - Reducción de bundle
   - Caché de assets

---

## 📝 Información de la Tienda

**Nike Montecer Store**
- Propietario: Edgar Montececer
- Ubicación: Changuinola, Bocas del Toro, Panamá
- Email: montecer@gmail.com
- Teléfono: 6885-6789
- Horario:
  - Lunes a Viernes: 9:00 AM - 7:00 PM
  - Sábados: 9:00 AM - 6:00 PM
  - Domingos: 10:00 AM - 4:00 PM

---

## 📄 Licencia

Este proyecto es con fines educativos. Nike® es una marca registrada de Nike, Inc.

**Nota**: El logo y nombre Nike se usan únicamente con fines educativos, no comerciales.

---

## 🎓 Conceptos Clave Aprendidos

Este proyecto demuestra:

1. **HTML Semántico**: Estructura correcta de página
2. **CSS Avanzado**: Grid, Flexbox, Animaciones
3. **JavaScript Vanilla**: DOM, Events, Funciones
4. **Diseño Responsivo**: Mobile-first approach
5. **UX/UI**: Intuitivo e atractivo
6. **Ecommerce**: Carrito, checkout, productos

---

## 📞 Soporte

Para soporte o preguntas:
- Email: montecer@gmail.com
- Teléfono: 6885-6789
- Ubicación: Changuinola, Bocas del Toro

---

**¡Gracias por usar Nike Montecer Store!** 🏃‍♂️👟

**"Just Do It" - Never Give Up**

---

*Última actualización: 20 de febrero de 2026*
