import React from "react";
import './signIn.scss'
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from '../../firebase/firebase.Utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password} = this.state;

        try {
            
        } catch (error) {
            
        }
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign In with Google</CustomButton>
                    </div>
                </form>

            </div>
        )

    }

}
export default SignIn;