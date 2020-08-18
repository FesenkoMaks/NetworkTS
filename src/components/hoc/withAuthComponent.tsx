import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";

type PropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: any) => ({
    isAuth: state.auth.isAuth
})

export const WithAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<any> {
        render(){
            debugger
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


    return ConnectedAuthRedirectComponent
}