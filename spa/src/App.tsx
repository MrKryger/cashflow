import React from 'react';
import Main from './Main';
import Start from './Start';
import History from './History/History';

import './App.css';

const App = () => {
  return (
    <div className="app-block">
      <Start/>
      <Main/>
      <History/>
    </div>
  );
}

export default App;
