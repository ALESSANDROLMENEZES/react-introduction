import React, { cloneElement } from 'react';
import './Row.css';

export default props => (
    /* jshint ignore:start */
    <>
        <tr className="Table-Tr">
            <td>{props.id}</td>
            <td>{props.description}</td>
            <td>{props.price}</td>
        </tr>
    </>
    /* jshint ignore:end */
);