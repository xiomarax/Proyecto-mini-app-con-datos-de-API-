import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Relacionados } from "./Relacionados";

export const Pelicula = () => {
  // recibir parametros
  const { id } = useParams();

  // estados
  // objeto de cada pelicula a mostrar
  const [pelicula, setPelicula] = useState({});
  const [cargando, setCargando] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const obtenerPelicula = async () => {
      try {
        // obtener respuesta del endpoint de pelicula por id
        const res = await fetch("https://devsapihub.com/api-movies/" + id);
        if (!res.ok) throw new Error("Error al obtener la información.");
        const data = await res.json();
        setPelicula(data);
      } catch (error) {
        setErr(error.mesage);
      } finally {
        setCargando(false);
      }
    };

    obtenerPelicula();
  }, [id]);

  if (cargando) return <h1>Esta cargando la pelicula</h1>;
  if (err) return <h1>Error al descargar la información.</h1>;
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <img src={pelicula.image_url} style={{ width: "12.5rem" }} />
      <h1>{pelicula.title}</h1>
      <p>{pelicula.description}</p>
      <p>* Fecha de Lanzamiento: {pelicula.year}</p>
      <p>* Valoraciones: {pelicula.genre}</p>
      <p>* Género: {pelicula.stars}</p>
      <Relacionados genre={pelicula.genre} id={id}></Relacionados>
    </div>
  );
};
