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

Desarrollado por: Lucas
