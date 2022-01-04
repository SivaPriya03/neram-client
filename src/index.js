import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';

const App = () => {
  return <div className={`${style.outline} ${style.test}`}>Hello</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
