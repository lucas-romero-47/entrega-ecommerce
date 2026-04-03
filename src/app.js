import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;

const MONGO_URI =
  "mongodb+srv://coder:coderpass@cluster.zj4o5yc.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster";
mongoose
  .connect(MONGO_URI)
  .then(async () => {
    const cartModel = (await import("./models/cart.model.js")).default;
    const exists = await cartModel.findById("69cff2778e53780468d38af4");
    if (!exists) {
      const newCart = await cartModel.create({ products: [] });
      console.log(
        "⚠️ EL CARRITO NO EXISTÍA. USA ESTE NUEVO ID EN TU INDEX.JS:",
        newCart._id,
      );
    } else {
      console.log("✅ El carrito configurado existe en la DB");
    }
  })
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);

app.use("/", viewsRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
