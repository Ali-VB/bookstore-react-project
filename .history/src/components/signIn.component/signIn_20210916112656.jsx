import React from "react";
import './signIn.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    render(){
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <input name='email' value={this.state.email} required/>
                  <lable></lable>
                    <input name='password' value={this.state.password} required/>
                </form>
            </div>
        )

    }

}