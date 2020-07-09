import React from 'react';

export default props => {
  let status = (props.nota >= 7) ? 'Aprovado' : 'Reprovado';
  return (
    /* jshint ignore:start */
    <div>
      <h2>O aluno {props.name}</h2>
      <h4>Foi {status}</h4>
      <p>com a nota <strong>{props.nota}</strong></p>
    </div>
    /* jshint ignore:end */
  );
};