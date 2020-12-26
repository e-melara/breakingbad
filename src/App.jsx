import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import Frase from "./Frase";
import { api } from "./helpers";

const Boton = styled.button`
 background-image: linear-gradient(#007d35 0%, #007d35 40%, #0f574e 100%);
 background-size: 300px;
 font-family: Arial, Helvetica, sans-serif;
 color: #fff;
 margin-top: 3rem;
 padding: 1rem 3rem;
 font-size: 2rem;
 border: 2px solid black;
 transition: background-size 0.5s ease;
 :hover {
  cursor: pointer;
  background-size: 400px;
 }
`;

const Contenedor = styled.div`
 display: flex;
 align-items: center;
 padding-top: 5rem;
 flex-direction: column;
`;

function App() {
 const [frase, setFrase] = useState({});

 useEffect(() => {
  handleClick();
 }, []);

 const handleClick = async (e) => {
  const response = await api();
  if (response) {
   setFrase(response);
  }
 };

 return (
  <Contenedor>
   {Object.keys(frase).length !== 0 && <Frase frase={frase} />}
   <Boton onClick={handleClick}>Obtener Frase</Boton>
  </Contenedor>
 );
}

export default App;
