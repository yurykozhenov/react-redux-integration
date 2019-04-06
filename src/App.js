import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from './store';
import { withRedux } from './withRedux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Num: {this.props.state.num}
          </p>
          <button onClick={() => store.dispatch({ type: 'CHANGE' })} >Click me</button>
        </header>
      </div>
    );
  }
}

export default withRedux(App);
