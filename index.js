import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import CustomInput from './CustomInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

const App = () => {
  const [myVal, setMyValue] = useState('Initial Value');
  useEffect(() => {
    console.log('Initial Load');
    setTimeout(() => {
      console.log('Rerendered');
      setMyValue('New Value');
    }, 10000);
  }, []);

  return (
    <div className="root container">
      <CustomInput shouldFocus={true} value={myVal} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
