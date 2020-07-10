import React from 'react';
import First from './components/basics/First';
import Secound from './components/basics/Secound';
import Third from './components/basics/Third';
import FragmentA from './components/basics/FragmentA';
import FragmentB from './components/basics/FragmentB';
import Random from './components/basics/Randon';
import Card from './components/layout/Card';
import Father from './components/basics/Father';
import Child from './components/basics/Child';
import Repeat from './components/repetition/Repeat';
import RepeatProducts from './components/repetition/RepeatProducts';
import User from './components/basics/User';
import FatherIndirect from './components/comunication/FatherIndirect';
import './App.css';

export default () => (
  /* jshint ignore:start */
  <>
    <h1>React App</h1> 
    <div className="Cards">

      <Card title="#10 - Use state" color="#ee4266">
        <FatherIndirect/>
      </Card>
      
      <Card title="#09 - Condition" color="#ff2e00">
        <User user={{name:'Alessandro'}}/>
        <User user={{}}/>
      </Card>
      
      <Card title="#08 - Repeat products" color="#226f54">
        <RepeatProducts />
      </Card>
      
      <Card title="#07 - Repeat" color="#226f54">
        <Repeat />
      </Card>
      
      <Card title="#01A - Primeiro component" color="#540d6e">
        <First />
      </Card>

      <Card title="#01B - Primeiro component com fragmento" color="#ee4266">
        <FragmentA />
      </Card>

      <Card title="#02 - Fragmento" color="#ffd23f">
        <FragmentB />
      </Card>

      <Card title="#03 - Condicional" color="#1f271b">
        <Third nota={7} name="Gabriel" />
      </Card>

      <Card title="#04 - Props" color="#a81031">
          <Secound
        title="This is a title"
        subtitle="This is a subtitle from origin"
        description="lorem ipsum dalari ielo set an dolarem umos las lies"/>
      </Card>
      
      <Card title="#05 - Random">
        <Random min={1} max={10}/>
      </Card>

      <Card title="#06 - Father el. with childs" color="#5e4ae3">
        <Father lastname="Ferreira">
          <Child name="João"/>
          <Child name="Aline"/>
          <Child name="Juliana"/>
          <Child name="Pedro"/>
        </Father>
      </Card>

    </div>
  </>
  /* jshint ignore:end */
);