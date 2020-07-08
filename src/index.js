import ReactDom from 'react-dom';
import React from 'react';
import First from './components/basics/First';
import Secound from './components/basics/Secound';
import './index.css';

ReactDom.render(
  <div>
    <First></First>
    <Secound
    title="This is a title"
    subtitle="This is a subtitle from origin"
    description="lorem ipsum dalari ielo set an dolarem umos las lies"
    ></Secound>
  </div>,
  document.getElementById('root')
  );