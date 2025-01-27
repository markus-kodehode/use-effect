import { useState } from "react";
import CookieProduct from "./CookieProduct";

export default function Cookie() {
  const [cookieCount, setCookieCount] = useState(0);

  function incrementCookie() {
    setCookieCount((prev) => prev + 1);
  }

  return (
    <div className="cookie">
      <div className="cookie-clicker">
        <h2 className="cookie-counter">{cookieCount} cookies</h2>
        <button className="cookie-button" onClick={incrementCookie}>
          <img src="cookie.webp" alt="Cookie" />
        </button>
      </div>
      <div className="right-section">
        <img
          className="vertical-panel"
          src="panelVertical.png"
          alt="Vertical panel"
        />
        <div className="cookie-store">
          <h1 className="cookie-store-title">STORE</h1>
          <CookieProduct
            src="cursor.webp"
            product="Cursor"
            cookieCount={cookieCount}
            setCookieCount={setCookieCount}
          />
          <CookieProduct
            src="grandma.webp"
            product="Grandma"
            cookieCount={cookieCount}
            setCookieCount={setCookieCount}
          />
        </div>
      </div>
    </div>
  );
}
