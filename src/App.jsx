import React from 'react';
import First from './components/basics/First';
import Secound from './components/basics/Secound';
import Third from './components/basics/Third';
import FragmentA from './components/basics/FragmentA';
import FragmentB from './components/basics/FragmentB';
import Random from './components/basics/Randon';
import Card from './components/layout/Card';

export default () => (
  /* jshint ignore:start */
  <>
    <h1>React App</h1> 


    <Card title="#01A - Primeiro component">
      <First />
    </Card>

    <Card title="#01B - Primeiro component com fragmento">
      <FragmentA />
    </Card>

    <Card title="#02 - Fragmento">
      <FragmentB />
    </Card>

    <Card title="#03 - Condicional">
      <Third nota={7} name="Gabriel" />
    </Card>

    <Card title="#04 - Props">
        <Secound
      title="This is a title"
      subtitle="This is a subtitle from origin"
      description="lorem ipsum dalari ielo set an dolarem umos las lies"/>
    </Card>
    
    <Card title="#05 - Random">
      <Random min={1} max={10}/>
    </Card>
    
  </>
  /* jshint ignore:end */
);