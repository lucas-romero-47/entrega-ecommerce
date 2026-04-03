import { Router } from "express";
import cartModel from "../models/cart.model.js";

const router = Router();

router.get("/:cid", async (req, res) => {
  try {
    const cart = await cartModel
      .findById(req.params.cid)
      .populate("products.product")
      .lean();
    if (!cart)
      return res
        .status(404)
        .send({ status: "error", message: "Carrito no encontrado" });
    res.json({ status: "success", payload: cart });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

router.post("/:cid/products/:pid", async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await cartModel.findById(cid);
    const existingProduct = cart.products.find(
      (p) => p.product.toString() === pid,
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.products.push({ product: pid, quantity: 1 });
    }

    cart.markModified("products");
    await cart.save();
    res.send({ status: "success", message: "Producto agregado" });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

router.delete("/:cid/products/:pid", async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const updatedCart = await cartModel.findByIdAndUpdate(
      cid,
      { $pull: { products: { product: pid } } },
      { new: true },
    );

    if (!updatedCart) return res.status(404).json({ status: "error" });
    res.json({ status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

router.delete("/:cid", async (req, res) => {
  try {
    const cart = await cartModel.findByIdAndUpdate(
      req.params.cid,
      { products: [] },
      { new: true },
    );
    res.send({ status: "success", message: "Carrito vaciado" });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

export default router;
