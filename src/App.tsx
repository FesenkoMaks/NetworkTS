import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Profile from "./components/profile/Profile";
import {Route} from 'react-router-dom';

import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {StoreType} from './redux/store';
import DialogsContainer from "./components/dialogs/DialogsContainer";

import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";


type AppPropsType = {
    store: StoreType
    // addPost: (textPost:string) => void
    // addMessage: () => void
    // updateNewPostMessage: (newText: string) => void
    // updateNewMessage: (newText: string) => void
    // dispatch: (action:any) => void
}


function App() {
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

            </div>
        </div>

    );
}

export default App;
