import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Brand } from '../src';

const App = () => {
  return (
    <div>
      <Brand />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
