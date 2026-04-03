# 🛒 Ecommerce Backend - Proyecto Final

Este es un sistema de gestión de productos y carritos de compra desarrollado con **Node.js**, **Express**, **MongoDB** y **Handlebars**. El proyecto permite la gestión completa de un catálogo de comida rápida y la persistencia de datos en una base de datos NoSQL (MongoDB Atlas).

---

## 🚀 Características Principales

* **Persistencia de Datos:** Uso de **Mongoose** para conectar con MongoDB Atlas.
* **Motor de Plantillas:** Vistas dinámicas con **Handlebars**.
* **API REST:** Endpoints profesionales para productos y carritos.
* **Poblado de Datos (Populate):** Visualización detallada de productos (título, precio, categoría) dentro del carrito.
* **Operaciones del Carrito:** * Agregar productos (agrupando por cantidad).
    * Eliminar una unidad o el producto completo de la fila.
    * Vaciar el carrito completo.
    * Actualización en tiempo real mediante peticiones `fetch`.

---

## 📂 Estructura del Proyecto

* `src/app.js`: Punto de entrada del servidor y configuración de middlewares.
* `src/routes/`: Definición de rutas para productos, carritos y vistas.
* `src/models/`: Esquemas de Mongoose para la base de datos (Models).
* `src/views/`: Plantillas Handlebars para la interfaz de usuario.
* `public/`: Archivos estáticos (CSS y JS del lado del cliente).

---

## 🛠️ Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
Iniciar el servidor:

Bash
npm start
El servidor correrá en: http://localhost:8080

🔌 Endpoints de la API
Productos (/api/products)
GET /: Listar todos los productos cargados.

POST /: Agregar un nuevo producto (vía Postman).

DELETE /:pid: Eliminar un producto por ID.

Carrito (/api/carts)
GET /:cid: Ver productos en un carrito específico (con Populate activo).

POST /:cid/products/:pid: Agregar un producto al carrito.

DELETE /:cid/products/:pid: Eliminar un producto del carrito.

DELETE /:cid: Vaciar el carrito completo.

📝 Notas de la Entrega

Se optimizó la lógica del frontend para asegurar que las peticiones asíncronas de tipo DELETE se procesen correctamente, utilizando Data Attributes en el HTML para el manejo seguro de IDs de MongoDB. La interfaz fue simplificada para mejorar la legibilidad y la experiencia de usuario.

Desarrollado por: Lucas
Se optimizó la lógica del frontend para asegurar que las peticiones asíncronas de tipo DELETE se procesen correctamente, utilizando Data Attributes en el HTML para el manejo seguro de IDs de MongoDB. La interfaz fue simplificada para mejorar la legibilidad y la experiencia de usuario.

Desarrollado por: Lucas
