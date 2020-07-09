import React from 'react';

export default function (props) {
  let status = (props.nota >= 7) ? 'Aprovado': 'Reprovado';
  /* jshint ignore:start */
  return (
    <div>
      <h2>O aluno {props.name}</h2>
      <h4>Foi {status}</h4>
      <p>com a nota foi {props.nota}</p>
    </div>
  )
  /* jshint ignore:end */
}