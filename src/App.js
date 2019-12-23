import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Bread from './Components/Bread'
import Bake from './Components/Bake'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from  './Components/EventBind'
import ParentComponent from './Components/ParentComponent'

function App() {
  return (
    <div className="App">
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
