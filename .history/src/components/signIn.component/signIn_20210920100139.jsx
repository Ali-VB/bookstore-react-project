import React from "react";
import './signIn.scss'
import FormInput from "../form-input/form-input";

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
                    <FormInput name='email' value={this.state.email}
                        required handleChang={this.handleChange}
                        label='email' />

                    <FormInput name='password' value={this.state.password}
                        required handleChang={this.handleChange}
                        label='password' />

                    <input type='submit' value="Submit Form" required />
                </form>

            </div>
        )

    }

}
export default SignIn;