import React from 'react';

const Panel = (props) => (
    <div>
        <h4>Os números da sorte são:</h4>        
        <div>
            <p>{props.numbers.join(' - ')}</p>
        </div>
    </div>
    );

export default Panel;