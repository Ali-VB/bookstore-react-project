import React from "react";
import './signIn.scss'
import 
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
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <input name='email' value={this.state.email} required onChange={this.handleChange} />
                    <label> Email</label>
                    <input name='password' value={this.state.password} required onChange={this.handleChange} />
                    <label> Password</label>
                    <input type='submit' value="Submit Form" required />
                </form>

            </div>
        )

    }

}
export default SignIn;