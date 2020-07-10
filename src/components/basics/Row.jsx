import React from 'react';
import './Row.css';

export default props => (
    /* jshint ignore:start */
    <>
        <tr className="Table-Tr" key={props.id}>
            <td>{props.id}</td>
            <td>{props.description}</td>
            <td>R$ {props.price.toFixed(2).replace('.',',')}</td>
        </tr>
    </>
    /* jshint ignore:end */
);