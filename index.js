import React, { Component } from 'react';
import { render } from 'react-dom';
import CustomInput from './CustomInput';
import './styles/style.scss';

class App extends Component {
  render() {
    setTimeout(() => console.log(document.getElementById('root').innerHTML));
    return (
      <div className="root">
        <CustomInput shouldFocus={true} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
