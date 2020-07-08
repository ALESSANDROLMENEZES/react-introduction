import React from 'react';

export default function (props) {
  let status = (props.nota >= 7) ? 'Aprovado': 'Reprovado';
  return (
    <div>
      <h2>O aluno { props.name }</h2>
      <h4>Foi { status }</h4>
      <p>com a nota foi { props.nota }</p>
    </div>
  )
}