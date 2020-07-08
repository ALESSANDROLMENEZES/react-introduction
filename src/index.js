import ReactDom from 'react-dom';
import React from 'react';
import First from './components/basics/First';
import Secound from './components/basics/Secound';
import Third from './components/basics/Third';
import './index.css';

ReactDom.render(
  <div>
    <First></First>
    <Secound
    title="This is a title"
    subtitle="This is a subtitle from origin"
    description="lorem ipsum dalari ielo set an dolarem umos las lies"
    ></Secound>
    <Third nota={ 7 } name="Gabriel" ></Third>
  </div>,
  document.getElementById('root')
  );