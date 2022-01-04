import './App.css';
import Navbar from "./components/Navbar";
import {Switch, Route } from 'react-router-dom';
import Category from "./pages/Category";
import ProductDescription from './pages/ProductDescription';
import Error from './pages/Error'
import Cart from './pages/Cart';
import { Component } from 'react';



class App extends Component {
  render(){
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Category}  />
        <Route path='/cart/' exact  component={Cart} />  
        <Route path='/product/:id' exact component={ProductDescription}  />  
        <Route path='*' component={Error} />  
      </Switch>
    </>
  );
  }
}

export default App;
