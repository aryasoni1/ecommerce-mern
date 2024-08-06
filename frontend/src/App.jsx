import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Footer from "./components/Footer";
//import images
import bannerhandicraft from "./assests/frontend/assets/bannerhandicraft.jpg";
import bannerfood from "./assests/frontend/assets/bannerfood.jpg";
import bannertribal from "./assests/frontend/assets/bannertribal.jpg";
export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/handicrafts"
            element={
              <Category category="handicrafts" banner={bannerhandicraft} />
            }
          />
          <Route
            path="/food"
            element={<Category category="food" banner={bannerfood} />}
          />
          <Route
            path="/tribal"
            element={<Category category="tribal" banner={bannertribal} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}
