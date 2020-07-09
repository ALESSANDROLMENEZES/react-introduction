import React from 'react';
import Child from './Child';

export default props => (
/* jshint ignore:start */
    <>
        <Child name={props.name} lastname={props.lastname}/>
        <Child name={props.name} lastname={props.lastname}/>
        <Child name={props.name} lastname={props.lastname}/>
    </>
   /* jshint ignore:end */  
);