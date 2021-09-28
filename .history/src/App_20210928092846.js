import React from 'react'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop.jsx'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header/header';
import SignInSignUp from './pages/signIn-signUp/signIn-signUp'
import { auth, createUserProfileDocument } from './firebase/firebase.Utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

  /*   constructor() {
      super();
      this.state = {
        currentUser: null
      }
    } */

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(onSnapshot => {
          setCurrentUser({
            id: onSnapshot.id,
            ...onSnapshot.data()
          })
        });

      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ?
              (<Redirect to='/' />) :
              (<SignInSignUp />)} />

        </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  setCurrentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
