import React from 'react';
import products from './../../data/products';
import Row from './../basics/Row';
import Table from './../layout/Table';


export default props => {
    /* jshint ignore:start */
    let items = products.map((product) => (<Row {...product}></Row>))
    return (
        <Table>
            {items}
        </Table>
    )
    /* jshint ignore:end */
};