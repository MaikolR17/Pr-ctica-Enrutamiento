import React from "react";
import { useParams } from "react-router-dom";

const Número = () => {
    const { Número } = useParams();
    return (
        <div>
            <h1> {Número} </h1>
        </div>
    );
};

export default Número;