import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      noticias : ['Noticia 1','Noticia 2','Noticia 3']
    }
  }

  render()
  {
    return (
        <div>
          {this.state.noticias.map((noticia)=>{return  <p>{noticia}</p>})}
        </div>
      )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        < Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
