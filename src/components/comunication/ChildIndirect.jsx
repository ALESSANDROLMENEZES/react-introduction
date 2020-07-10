import React from 'react';

export default props => {
    const cb = props.refreshFather;
    const name = 'Jonas';
    const age = Math.ceil((Math.random()) * (80 - 10 + 1) + 10);
    const nerd = ((Math.random()) > 0.5) ? 'Sim': 'Não';
    return (
        /* jshint ignore:start*/
        <>
            <div>
                <h4>I am a child</h4>
                <p>When you click me I'll update my father</p>
                <button onClick={e =>cb(name, age, nerd)}>Atualizar</button>
            </div>
        </>
        /* jshint ignore:end*/
    );
};