import { Router } from "express";
import cartModel from "../models/cart.model.js";
import productModel from "../models/product.model.js";

const router = Router();

router.get("/products", async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const result = await productModel.paginate({}, { page, limit, lean: true });

    res.render("products", {
      payload: result.docs,
      page: result.page,
      totalPages: result.totalPages,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevLink: result.hasPrevPage ? `/products?page=${result.prevPage}` : null,
      nextLink: result.hasNextPage ? `/products?page=${result.nextPage}` : null,
      title: "Kiosco Escuela N11 - Menú",
    });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(500)
      .render("products", { payload: [], error: "Error de servidor" });
  }
});

router.get("/carts/:cid", async (req, res) => {
  try {
    const { cid } = req.params;

    const cart = await cartModel
      .findById(cid)
      .populate("products.product")
      .lean();

    if (!cart) {
      return res.status(404).render("cartDetail", {
        cart: null,
        error: "El carrito solicitado no existe.",
      });
    }

    res.render("cartDetail", {
      cart,
      title: "Mi Carrito - Kiosco Escuela N11",
    });
  } catch (error) {
    console.error("Error al obtener el detalle del carrito:", error);
    res.status(500).render("cartDetail", {
      error: "Hubo un problema al procesar los datos del carrito.",
    });
  }
});

router.get("/", (req, res) => {
  res.redirect("/products");
});

export default router;
