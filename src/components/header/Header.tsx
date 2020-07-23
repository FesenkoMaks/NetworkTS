import React, {ReactNode} from "react";
import './Header.css';
import {NavLink} from "react-router-dom";
import {DataType} from "../../redux/Auth-reducer";

export type DataPropsType = {
    setUserData: (id: any, email: any, login: any) => void
    isAuth: boolean
    login: string | null

}

function Header(props: DataPropsType) {
    return (
        <header>
            <div className={'container'}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbmeGrnmBuGprYIx2AhXgi8WAT8vXDjC8QhUkUAvT3NzfdvPBr&usqp=CAU'}/>
                <span>HELLO!</span>
                <div className={'login'}>
                    {props.isAuth ? props.login
                        :<NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;