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

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''});
    }

    handleChange = event => {
const {value, name } = event.target;
this.setState([name] )
    }
    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit }>
                    <input name='email' value={this.state.email} required onChange={} />
                    <label> Email</label>
                    <input name='password' value={this.state.password} required onChange={}/>
                    <label> Password</label>
                    <input type='submit' value="Submit Form" required />
                </form>

            </div>
        )

    }

}