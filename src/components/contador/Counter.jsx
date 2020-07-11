import React, { Component } from 'react';

class Counter extends Component{
    render() {
        return (
            
            <div>
                <h2>Contador</h2>
                <h3>{this.state.number}</h3>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
            
        );
    }
    
    state = {
        number: this.props.initialNumber
    };
    
    
    increment = () => {
        this.setState({
            number: this.state.number + 1
        });
    };
    
    decrement = () => {
        this.setState({
            number: this.state.number - 1
        });
    };
};
    
    export default Counter;