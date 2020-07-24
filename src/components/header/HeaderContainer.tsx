import React from "react";
import Header, {DataPropsType} from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/Auth-reducer";
import { UsersAPI} from "../../redux/Api";


class HeaderContainer extends React.Component<DataPropsType>{
    componentDidMount() {
        UsersAPI.getAuthMe().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setUserData(id, email, login)
                }
        });
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

export default connect(mapStateToProps, {setUserData}) (HeaderContainer)