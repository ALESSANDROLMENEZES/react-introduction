import React from 'react';
import First from './components/basics/First';
import Secound from './components/basics/Secound';
import Third from './components/basics/Third';
import FragmentA from './components/basics/FragmentA';
import FragmentB from './components/basics/FragmentB';

export default function teste(){
  return (
    /* jshint ignore:start */
    <>
      <h1>React App</h1>
      <FragmentA />
      <FragmentB />
      <Third nota={7} name="Gabriel" />
      <Secound
        title="This is a title"
        subtitle="This is a subtitle from origin"
        description="lorem ipsum dalari ielo set an dolarem umos las lies"
      />
      <First />
    </> 
    /* jshint ignore:end */
  ); 
}