# 🏪 Nike Montecer Store

> E-commerce moderno de zapatillas Nike para toda la familia

![Nike Montecer Store](https://img.shields.io/badge/Proyecto-E--commerce-red?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Descripción

**Nike Montecer Store** es un e-commerce profesional y completamente funcional desarrollado con tecnologías web modernas (HTML5, CSS3, JavaScript vanilla). Ofrece:

✨ **Características Principales:**
- 🛍️ Catálogo de zapatillas Nike para hombre, mujer, niño y niña
- 🛒 Sistema de carrito dinámico
- 💳 Métodos de pago: VISA, Clave, Yappy
- 📱 Diseño 100% responsive (PC, tablet, móvil)
- 🎨 Animaciones visuales suaves
- 🔐 Validaciones de seguridad
- 📧 Formulario de contacto
- 👤 Sistema de registro e inicio de sesión
- 🎯 filtrado por categorías

---

## 🚀 Inicio Rápido

### **Requisitos**
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Ninguna instalación adicional requerida

### **Abrir el Proyecto**

**Opción 1: Abrir directamente**
```bash
# Solo abre el archivo index.html en tu navegador
# O usa Live Server en VS Code
```

**Opción 2: Con Live Server**
1. Clic derecho en `index.html`
2. Selecciona "Abrir con Live Server"
3. Se abrirá automáticamente en `http://localhost:5500`

---

## 📁 Estructura del Proyecto

```
nike-montecer-store/
├── index.html              # Página principal (450 líneas)
├── styles.css              # Estilos CSS (1300+ líneas)
├── script.js               # Lógica JavaScript (776+ líneas)
├── imagen/                 # Carpeta con imágenes
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
├── README.md               # Este archivo
└── GUIA_PROYECTO.md        # Guía detallada del proyecto
```

---

## 💻 Características Técnicas

### **HTML5**
- Estructura semántica y accesible
- Múltiples secciones interactivas
- Formularios validados
- Meta tags responsivos
- 450+ líneas comentadas

### **CSS3**
- Flexbox y CSS Grid
- Variables CSS para personalización
- Animaciones suaves (fade, bounce, ripple)
- Media Queries responsive
- Transiciones interactivas
- 1300+ líneas optimizadas

### **JavaScript Vanilla**
- DOM manipulation
- Event listeners dinámicos
- Renderizado de componentes
- Gestión de carrito
- Validaciones de formularios
- 776+ líneas bien documentadas

---

## 🎯 Funcionalidades

### 📦 Gestión de Productos
```
✓ 10 productos disponibles
✓ Filtrado por categoría
✓ Tallas disponibles
✓ Información detallada
✓ Badges (Nuevo, Popular)
```

### 🛒 Carrito de Compras
```
✓ Agregar/eliminar productos
✓ Seleccionar tallas
✓ Modificar cantidades
✓ Cálculo automático de totales
✓ Contador en tiempo real
```

### 💳 Métodos de Pago
```
✓ Tarjeta VISA
✓ Clave de Panamá
✓ Yappy
✓ Confirmación de compra
✓ Número de orden generado
```

### 👥 Autenticación
```
✓ Login de usuario
✓ Registro de nueva cuenta
✓ Validación de contraseña
✓ Confirmación de email
```

### 📧 Contacto
```
✓ Información de la tienda
✓ Formulario de contacto
✓ Redes sociales vinculadas
✓ Horario de atención
```

---

## 🎨 Diseño Visual

### **Colores Principales**
- **Rojo Nike**: `#ff0000` - Primario
- **Negro**: `#000000` - Secundario
- **Blanco**: `#ffffff` - Acentos

### **Tipografía**
- Fuente: Segoe UI, Tahoma, Geneva, Verdana
- Pesos: Normal (400), Medium (500), Bold (700)

### **Animaciones**
- Fade In / Fade Out
- Slide Effects
- Hover Animations
- Ripple Effects
- Bounce Indicators

---

## 📱 Responsividad

El proyecto se adapta perfectamente a todos los tamaños:

| Dispositivo | Resolución | Breakpoint |
|---|---|---|
| Móvil | < 768px | Media Query activa |
| Tablet | 768px - 1200px | Grid adaptativo |
| Desktop | > 1200px | Layout completo |

**Mobile Features:**
- Menú hamburguesa
- Navegación simplificada
- Grid de 2-3 columnas
- Botones optimizados
- Textos redimensionados

---

## 🔒 Validaciones

El proyecto incluye validaciones importantes:

### **Carrito**
- ✓ Requiere seleccionar talla
- ✓ Cantidad mínima 1
- ✓ Evita duplicados

### **Registro**
- ✓ Contraseña mínimo 6 caracteres
- ✓ Confirmación de contraseña
- ✓ Email válido requerido

### **Checkout**
- ✓ Carrito no puede estar vacío
- ✓ Método de pago obligatorio
- ✓ Todos los campos requeridos

---

## 📊 Información de la Tienda

| Detalle | Información |
|---|---|
| Nombre | Nike Montecer Store |
| Propietario | Edgar Montececer |
| Email | montecer@gmail.com |
| Teléfono | 6885-6789 |
| Ubicación | Changuinola, Bocas del Toro, Panamá |

### **Horario**
- Lunes a Viernes: 9:00 AM - 7:00 PM
- Sábados: 9:00 AM - 6:00 PM
- Domingos: 10:00 AM - 4:00 PM

---

## 🛠️ Personalización

### **Cambiar Colores**
Edita `styles.css` línea 18-24:
```css
:root {
    --primary-color: #ff0000;      /* Tu color primario */
    --secondary-color: #000000;    /* Tu color secundario */
}
```

### **Agregar Productos**
En `script.js`, agrega al array `products`:
```javascript
{
    id: 11,
    name: 'Nike [Modelo]',
    category: 'categoria',
    price: 0.00,
    description: 'Descripción',
    sizes: ['7', '8', '9'],
    image: 'imagen/archivo.jpg'
}
```

### **Cambiar Información**
En `index.html`, sección `contact-info`:
- Nombre, email, teléfono
- Ubicación
- Redes sociales

---

## 🐛 Troubleshooting

| Problema | Solución |
|---|---|
| Imágenes no cargan | Verifica la carpeta `imagen/` y rutas |
| Estilos no se aplican | Limpia caché (Ctrl+Shift+Delete) |
| JavaScript no funciona | Abre consola (F12) para ver errores |
| Carrito se borra | Es normal, se reinicia al refrescar |

---

## 📚 Documentación Completa

Para una guía detallada con ejemplos, ver: **[GUIA_PROYECTO.md](GUIA_PROYECTO.md)**

---

## 🚀 Mejoras Futuras

- [ ] Backend con Node.js/Express
- [ ] Base de datos MongoDB/MySQL
- [ ] Autenticación real
- [ ] Pagos en línea integrados
- [ ] Sistema de reseñas
- [ ] Carrito persistente
- [ ] Wishlist de favoritos
- [ ] Búsqueda avanzada
- [ ] Modo oscuro

---

## 📄 Licencia

Proyecto educativo. Nike® es marca registrada de Nike, Inc.

**Nota**: Uso educativo únicamente, NO comercial.

---

## 👨‍💻 Desarrollado con ❤️

```
Tecnologías:
- HTML5 (Estructura)
- CSS3 (Diseño + Animaciones)
- JavaScript Vanilla (Interactividad)
- Font Awesome (Iconos)
```

---

## 📞 Contacto

**Nike Montecer Store**
- 📧 Email: montecer@gmail.com
- 📱 Teléfono: 6885-6789
- 🏪 Ubicación: Changuinola, Bocas del Toro, Panamá

---

## ⭐ Dale una Estrella

Si te gustó el proyecto, ¡comparte y apoya!

**"Just Do It" - ¡Nunca te rindas!** 🏃‍♂️👟

---

*Última actualización: 20 de febrero de 2026*
