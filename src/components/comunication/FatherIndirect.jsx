import React,{useState} from 'react';
import ChildIndirect from './ChildIndirect';

export default props => {
    let [name, setName] = useState('Anônimo');
    let [age, setAge] = useState(0);
    let [nerd, setNerd] = useState('Não');
    function update(name, age, nerd) {
        setAge(age);
        setName(name);
        setNerd(nerd);
    }
    return (
        /* jshint ignore:start*/
        <>
            <div>
                <p>
                    <span><strong>Nome:</strong> {name} </span>
                    <span><strong>Idade:</strong> {age} </span>
                    <span><strong>Nerd:</strong> {nerd} </span>
                </p>
            </div>
            <ChildIndirect refreshFather={update} />
        </>
        /* jshint ignore:end*/
    );
};