import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GrumpyCat from './grumpycatno.png';
import Bowl from './bowl.png';
import Scoreboard from './scoreboard.png';
import Donut from './donut.png';
import Fries from './fries.png';
import Goldfish from './goldfish.png';
import Hamburger from './hamburger.png';
import Hotdog from './hotdog.png';
import Pizza from './pizza.png';
import Taco from './taco.png';


class App extends Component {
  render() {
    return (
      <div>
        <h1 className="center-align">The Grumpy Cat Game</h1>
        <div>
          <img src={GrumpyCat} />
        </div>
        <div>
          <img src={Bowl} />
        </div>
        <div>
          <img src={Donut} />
          <img src={Fries} />
          <img src={Goldfish} />
          <img src={Hamburger} />
          <img src={Hotdog} />
          <img src={Pizza} />
          <img src={Taco} />
        </div>
        <div>
          <img src={Scoreboard} />
        </div>
      </div>
      
    );
  }
}

export default App;
