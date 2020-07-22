import React from "react";
import './Header.css';

function Header() {
    return (
        <header>
            <div className={'container'}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbmeGrnmBuGprYIx2AhXgi8WAT8vXDjC8QhUkUAvT3NzfdvPBr&usqp=CAU'}/>
                <span>HELLO!</span>
            </div>
        </header>
    )
}

export default Header;