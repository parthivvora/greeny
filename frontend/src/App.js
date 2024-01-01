import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:blogId" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
// style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}