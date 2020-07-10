import React, { cloneElement } from 'react';
import './Table.css';

export default props => {
    return (
        /* jshint ignore:start */
        <table className="Table">
            <thead className="Table-Header">
                <tr>
                    <th>ID</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {props.children.map((item) => (cloneElement(item, props)))}
            </tbody>
        </table>
        /* jshint ignore:end */
    );
};
