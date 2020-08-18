import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
const LoginForm = (props: any) => {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} component="input" name={'login'} type="text"/>
                </div>
                <div>
                    <Field placeholder={'Password'} component="input" name={'password'} type="text"/>
                </div>
                <div>
                    <Field component="input" name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                <button>
                    Login
                </button>
            </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = () => {
    let onSubmit = (formData: any) => {
        // print the form values to the console
        console.log(formData)
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login