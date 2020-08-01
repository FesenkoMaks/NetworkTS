import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/Auth-reducer";


export type PropsType = {

    isAuth: boolean
    login: string | null
    getAuth: () => void
}


class HeaderContainer extends React.Component<PropsType>{
    componentDidMount() {
        this.props.getAuth()
        // UsersAPI.getAuthMe().then(data => {
        //         if(data.resultCode === 0) {
        //             let {id, email, login} = data.data
        //             this.props.setUserData(id, email, login)
        //         }
        // });
    }

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

export default connect(mapStateToProps, { getAuth}) (HeaderContainer)