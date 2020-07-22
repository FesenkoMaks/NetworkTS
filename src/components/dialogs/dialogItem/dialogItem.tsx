import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    id: number
    name: string
}

const Dialog = (props:DialogPropsType) => {
    return(
    <div className={s.dialog}>
        <NavLink to={'/dialogs/' + props.id}> {props.name} </NavLink>
    </div>
    )
}



type DataTypes = {
    dialogs: Array<{name: string, id: number}>
}


function DialogsItem(props:DataTypes) {
    let dialogsElements = props.dialogs.map((d) => <Dialog name={d.name} id={d.id}/>)

    return (
           <div className={s.dialogItems}>
               {dialogsElements}
           </div>
              )
}

export default DialogsItem;