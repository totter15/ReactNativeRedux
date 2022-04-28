import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import AuthApp from './components/AuthApp';
import TodoApp from './components/TodoApp';
import rootReducer from './slices';

const store = createStore(rootReducer)

const App = () => {
  return (
  <Provider store={store}>
    <AuthApp/>
    {/* <TodoApp/> */}
  </Provider>
  );
};

export default App;