import Navbar from "./components/Navbar/Navbar";
import fondo from "./assets/fondo.jpg"
import { useEffect, useState } from "react";
import axios from "axios"
import ItemListContainer from "./components/ItemListContainer";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {

  const [productos, setProductos] = useState([])

  const getProductos = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setProductos(res.data)
  }

  useEffect(() => {
    getProductos();
  }, [])


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer productos={productos} />} />
        <Route
          path="/productos/:id"
          element={<ItemDetailContainer productos={productos} />}
        />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
      <div className="App">
        <img id="fondo" src={fondo} alt="Carrito" />
      </div>
    </div>
  );
};

export default App;

