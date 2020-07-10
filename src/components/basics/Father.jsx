import React, {cloneElement} from 'react';

export default props => (
/* jshint ignore:start */
    <>
        {props.children.map((child, i) => {
            return cloneElement(child, { ...props, key: i });
        })}
    </>
   /* jshint ignore:end */  
);