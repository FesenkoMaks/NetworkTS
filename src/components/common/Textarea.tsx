import React from "react";
import style from "./error.module.css";

export const Textarea = ({input, meta, ...props}: any) => {
    let hasError = meta.touched && meta.error
    return (

        <div className={hasError ? style.error : ''}>
            <textarea {...input} {...props}/>
            {hasError && meta.error && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    let hasError = meta.touched && meta.error
    return (

        <div className={hasError ? style.error : ''}>
            <input {...input} {...props}/>
            {hasError && meta.error && <span>{meta.error}</span>}
        </div>
    )
}