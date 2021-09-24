import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.Utils";
import '/sign-up.scss'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    render(){
        return(
            <div className="sign-up">
                <h2 className="title">I do not have a  </h2>
            </div>
        )
    }
}