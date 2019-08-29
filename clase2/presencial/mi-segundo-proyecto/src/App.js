import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './state/store'

import Counter from './componentes/Counter'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
