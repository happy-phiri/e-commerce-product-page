import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Gallery from "./components/Gallery";
import ProductDescription from "./components/ProductDescription";
// import data from "./data";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="App">
      <Navigation cartCount={cartCount} setCartCount={setCartCount} />
      <section className="hero">
        <Gallery />
        <ProductDescription setCartCount={setCartCount} />
      </section>
    </main>
  );
}

export default App;
