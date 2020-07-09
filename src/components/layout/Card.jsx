import React from 'react';
import './Card.css';

export default props => {
    let CardStyle = {
        backgroundColor: props.color || 'rgb(94, 0, 0)',
        borderColor:props.color || 'rgb(94, 0, 0)'
    };
    return (
        /* jshint ignore:start */
        <div className="Card" style={CardStyle}>
            <div className="Header" style={CardStyle}>
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
};