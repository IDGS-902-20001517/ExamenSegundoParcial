import { useState } from "react";
import "./App.css";
import SearchBox from "./components/Busqueda";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ListaProductos";
import ProductDetail from "./components/DetalleProducto";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/items" element={<ProductList />} />
        <Route path="/items/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
