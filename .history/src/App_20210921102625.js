import React from 'react'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.jsx'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header';
import SignInSignUp from './pages/signIn-signUp/signIn-signUp'
import {auth} from './firebase/firebase.Utils'
import react from 'react';

class App extends React.Component() {
  constructor (){
    super();
    this.state = {
      currentUser: null
    }
  }
 componentDidMount(){
   auth.onAuthStateChanged(user => {
     this.setState({currentUser :user});
     
   })
 }

  render(){
      return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
  }

}

export default App;
