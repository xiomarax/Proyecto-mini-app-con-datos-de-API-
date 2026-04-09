import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Relacionados = ({ genre, id }) => {
  // estados
  // objeto de cada pelicula a mostrar
  const [peliculasRelacionadas, setPeliculasRelacionadas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const obtenerPeliculasRelacionadas = async () => {
      try {
        // obtener respuesta del endpoint de generos
        const res = await fetch(
          "https://devsapihub.com/api-movies/genre/" + genre,
        );
        if (!res.ok)
          throw new Error("Error al obtener películas relacionadas.");
        const data = await res.json();
        const movies = data.filter((pelicula) => pelicula.id != id);
        setPeliculasRelacionadas(movies);
      } catch (error) {
        setErr(error.mesage);
      } finally {
        setCargando(false);
      }
    };

    obtenerPeliculasRelacionadas();
  }, [id]);

  if (cargando) return <h1>Cargando películas relacionadas.</h1>;
  if (err) return <h1>Error al obtener películas relacionadas.</h1>;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Tambien te puede interesar ver:</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {peliculasRelacionadas.map((pelicula) => (
          <Link to={"/pelicula/" + pelicula.id} class="card">
            <img
              src={pelicula.image_url}
              style={{ width: "12.5rem", marginBottom: "30px" }}
            ></img>
          </Link>
        ))}
      </div>
    </div>
  );
};
