import React from 'react';
import First from './components/first-page/First';
import List from './components/list/List';
import './App.css'
import { store } from '../src/store/store';
import User from './user/User';
import { Provider } from 'react-redux';
import Footer from './components/footer/Footer';

function App () {

  return (

<div className="App">

      <Provider store={store}>
      <First />
      <User/>

      <List/>
      <Footer/>
      </Provider>
      

    </div>
  );
}

export default App;
