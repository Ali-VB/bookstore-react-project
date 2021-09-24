import React from 'react'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.jsx'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header';
import SignInSignUp from './pages/signIn-signUp/signIn-signUp'
import { auth, createUserProfileDocument } from './firebase/firebase.Utils'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
      }
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
