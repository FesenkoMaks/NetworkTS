import React from "react";
import './Header.css';
import {NavLink} from "react-router-dom";

export type DataPropsType = {
    getAuth: () => void
    isAuth: boolean
    login: string | null
    loginOut: () => void
}

function Header(props: DataPropsType) {
    return (
        <header>
            <div className={'container'}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbmeGrnmBuGprYIx2AhXgi8WAT8vXDjC8QhUkUAvT3NzfdvPBr&usqp=CAU'}/>
                <span>HELLO!</span>
                <div className={'login'}>
                    {props.isAuth
                        ? <div>{props.login}- <button onClick={props.loginOut}>logout</button></div>
                        :<NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;