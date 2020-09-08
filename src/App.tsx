import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import {Route, withRouter} from 'react-router-dom';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializedApp} from "./redux/App-reducer";
import Preloader from "./components/common/Preloader";

type PropsType = {
    initializedApp: () => void
    initialized: boolean
}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializedApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className={'AppWrapper'}>
                    <HeaderContainer/>
                    <Nav/>
                    <div className={'AppWrapperComponents'}>
                        <Route
                            path={'/profile/:userId?'}
                            render={() => <ProfileContainer/>}/>
                        <Route
                            path={'/dialogs'}
                            render={() => <DialogsContainer/>}/>
                        <Route
                            path={'/news'}
                            render={() => <News/>}/>
                        <Route
                            path={'/music'}
                            render={() => <Music/>}/>
                        <Route
                            path={'/settings'}
                            render={() => <Settings/>}/>
                        <Route
                            path={'/users'}
                            render={() => <UsersContainer/>}/>
                        <Route
                            path={'/login'}
                            render={() => <Login/>}/>
                    </div>
                </div>
            )
        }

    }
}

let mapStateToProps = (state: any) => ({
    initialized : state.app.initialized
})

export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializedApp})
)(App);
