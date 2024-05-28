import React from "react";
import { useParams } from "react-router-dom";

const Palabra = () => {
    const { palabra, colorTexto, colorFondo } = useParams();

    const style = {
        color: colorTexto || "black",
        backgroundColor: colorFondo || "white"
    };

    return (
        <div style={style}>
            <h1> {palabra} </h1>
        </div>
    );
};

export default Palabra;