import React from "react";

export default props => (
/* jshint ignore:start */
    <>
        <h1>Número aleatório</h1>
        <h2>{(Math.floor(Math.random() * (props.max - props.min + 1) + props.min))}</h2>
    </>
/* jshint ignore:end */
);

