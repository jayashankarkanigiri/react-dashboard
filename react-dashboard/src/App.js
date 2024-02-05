// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import ParentComponent from './components/ParentComponent';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ParentComponent />
      </div>
    </Provider>
  );
}

export default App;
