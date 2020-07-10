import React from 'react';
import alunos from '../../data/alunos';

export default props => {
    /* jshint ignore:start */
    let list = alunos.map((aluno) => (<li key={aluno.id}>Aluno {aluno.name} nota: <strong>{aluno.value}</strong></li>)); 
    return (
        <>
            <ul style={{ listStyle:'none' }}>
                {list}
            </ul>
        </>
    );
    /* jshint ignore:end */
};