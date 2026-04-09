import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pelicula } from "./pages/Pelicula";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/pelicula/:id" element={<Pelicula></Pelicula>}></Route>
          <Route path="*" element={<h1>Ruta no encontrada</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
