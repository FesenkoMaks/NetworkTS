import React from "react";
import {reduxForm} from "redux-form";
import {Input} from "../common/Textarea";
import {maxLengthCreator, required} from "../../validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./Login.module.css"
import {FiledCreator} from "../common/FiledCreator";

type loginPropsType = {
    login: (login: string, password: string, rememberMe: boolean, captcha: string) => void
    isAuth: boolean
    captchaURL: string
}

let maxLength = maxLengthCreator(50)

type SampleFormProps = {
    captcha: string
}

const LoginForm = ({handleSubmit, error, captcha}: any ) => {
    return (
        <form onSubmit={handleSubmit}>
            <FiledCreator placeholder={'Login'} validate={[required, maxLength]} name={'login'} component={Input} type={'text'}/>
            <FiledCreator placeholder={'Password'} validate={[required, maxLength]} name={'password'} component={Input} type={'password'}/>
            <FiledCreator name={'rememberMe'} component={Input} type={'checkbox'} text={'remember me'}/>
            {error ? <div className= {style.errorForm}>
                {error}
            </div> : ''}
            {captcha && <div><img src={captcha}/>
            <FiledCreator component={Input} name={'captcha'} validate={[required]} type={'text'}/></div>}
            <button>
                Login
            </button>
        </form>
    )
}

let LoginReduxForm = reduxForm<any, {captcha: string}>({
    form: 'login'
})(LoginForm)

const Login = (props: loginPropsType) => {
    let onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captchaURL}/>
        </div>
    )
}

let mapStateToProps = (state: any) => {
    return {
        captchaURL: state.auth.captchaURL,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login)