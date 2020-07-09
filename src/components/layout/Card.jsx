import React from 'react';
import './Card.css';

export default props => (
/* jshint ignore:start */
    <div className="Card">
        <div className="Header">
            <h2>{props.title}</h2>
        </div>
        <div className="Body">
            {props.children}
        </div>
        <div className="Footer">
           <button className="Button">Detalhes</button>
        </div>
    </div>
  /* jshint ignore:end */  
);