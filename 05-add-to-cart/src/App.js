import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App component
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products category="" key="1" />} />
          <Route
            exact
            path="/category/electronics"
            element={<Products category="/category/electronics" key="2" />}
          />
          <Route
            exact
            path="/category/jewelery"
            element={<Products category="/category/jewelery" key="3" />}
          />
          <Route
            exact
            path="/category/men's-clothing"
            element={<Products category="/category/men's clothing" key="4" />}
          />
          <Route
            exact
            path="/category/women's-clothing"
            element={<Products category="/category/women's clothing" key="5" />}
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
