import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Textarea";
import {maxLengthCreator, required} from "../../validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"

type loginPropsType = {
    login: (login: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

let maxLength = maxLengthCreator(50)

const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength]}
                    placeholder={'Login'}
                    component={Input}
                    name={'login'}
                    type="text"
                />
            </div>
            <div>
                <Field
                    validate={[required, maxLength]}
                    placeholder={'Password'}
                    component={Input}
                    name={'password'}
                    type="password"
                />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {props.error ? <div className={style.errorForm}>
                {props.error}
            </div> : ''}
            <button>
                Login
            </button>
        </form>
    )
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props: loginPropsType) => {
    let onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStateToProps, {login})(Login)