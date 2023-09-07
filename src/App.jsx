import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products/Products.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";

function App() {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
