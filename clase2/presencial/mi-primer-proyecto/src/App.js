import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './state/store'

import Noticias from './componentes/Noticias'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Noticias />
      </div>
    </Provider>
  );
}

export default App;
