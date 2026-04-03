const addToCart = async (productId) => {
  const cartId = "69cff2778e53780468d38af4";

  try {
    const response = await fetch(`/api/carts/${cartId}/products/${productId}`, {
      method: "POST",
    });

    if (response.ok) {
      alert("✅ ¡Producto agregado!");
    } else {
      alert("❌ Error: " + response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
