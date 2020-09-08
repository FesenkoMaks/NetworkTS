import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, loginOut} from "../../redux/Auth-reducer";


export type PropsType = {

    isAuth: boolean
    login: string | null
    getAuth: () => void
    loginOut: () => void
}


class HeaderContainer extends React.Component<PropsType>{


    render() {
        return <Header {...this.props}/>;
    }
}

let mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login

    }
}

export default connect(mapStateToProps, { getAuth, loginOut}) (HeaderContainer)