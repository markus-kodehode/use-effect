import { useState } from "react";

export default function CookieProduct({
  product,
  src,
  cookieCount,
  setCookieCount,
}) {
  const [productState, setProductState] = useState({
    Cursor: { price: 15, owned: 0 },
    Grandma: { price: 30, owned: 0 },
  });

  function incrementProduct(productName) {
    const currentProduct = productState[productName];

    // Check if the product can be bought
    if (cookieCount >= currentProduct.price) {
      // Update the owned count and price (increase price by 15%)
      setProductState((prevState) => {
        const updatedProduct = {
          ...prevState[productName],
          owned: prevState[productName].owned + 1,
          price: Math.ceil(prevState[productName].price * 1.15),
        };

        return {
          ...prevState,
          [productName]: updatedProduct,
        };
      });

      setCookieCount((prevCount) => prevCount - currentProduct.price);
    }
  }

  return (
    <button
      className="cookie-product"
      onClick={() => incrementProduct(product)}
    >
      <img src={src} alt={product} />
      <div className="price-container">
        <h3>{product}</h3>
        <span
          className="product-price"
          style={{
            color: cookieCount >= productState[product].price ? "#6f6" : "#f66",
          }}
        >
          <img src="money.png" alt="Money" />
          {productState[product].price}
        </span>
      </div>
      <span className="product-owned">{productState[product].owned}</span>
    </button>
  );
}
