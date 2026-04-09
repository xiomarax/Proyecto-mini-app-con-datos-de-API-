import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [err, setErr] = useState(false);

  // obtener la informacion de la api
  useEffect(() => {
    const obtenerPeliculas = async () => {
      try {
        const res = await fetch("https://devsapihub.com/api-movies");
        if (!res.ok) throw new Error("Hubo un error al traer la información.");
        const data = await res.json();
        console.log(data);
        setPeliculas(data);
      } catch (error) {
        setErr(error.mesage);
      } finally {
        setCargando(false);
      }
    };
    obtenerPeliculas();
  }, []);

  if (cargando) return <h1>Cargando peliculas...</h1>;
  if (err) return <h1>Hubo un error al cargar las peliculas.</h1>;

  return (
    <div>
      <h1 >Peliculas Destacadas</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8,1fr)",
          gap: "20px",
        }}
      >
        {peliculas.map((pelicula) => (
          <Link to={"/pelicula/" + pelicula.id}>
            <img
              src={pelicula.image_url}
              style={{ width: "100%", height: "100%" }}
              class="card"
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
};
