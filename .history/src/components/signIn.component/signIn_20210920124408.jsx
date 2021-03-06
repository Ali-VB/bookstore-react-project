import React from "react";
import './signIn.scss'
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import {}

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
                        required handleChange={this.handleChange}
                        label='email' />

                    <FormInput name='password' value={this.state.password}
                        required handleChange={this.handleChange}
                        label='password' />

                    <CustomButton type='submit'  >Sign In</CustomButton>
                    <CustomButton type='submit'  >Sign In</CustomButton>
                </form>

            </div>
        )

    }

}
export default SignIn;