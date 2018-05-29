import React, { Component } from 'react';
import Events from './containers/events/events'
import PokemonApp from './containers/pokemonApp/pokemonApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonApp />
      </div>
    );
  }
}

export default App;
