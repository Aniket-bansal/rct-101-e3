import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
import Login from './pages/Login'
import Products from "./components/Products/Products";
import Home from "./pages/Home";
function App() {
  return (
    <div >
      <Navbar />
      {/* <Product /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
