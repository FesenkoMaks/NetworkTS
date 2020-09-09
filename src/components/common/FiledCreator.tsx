import React from "react";
import {Field} from "redux-form";

type FiledCreatorType = {
    validate?:any,
    placeholder?: string,
    component: any,
    name: string,
    type: string,
    text?: string
}

export const FiledCreator = ({validate, placeholder, component, name, type, text}: FiledCreatorType) => {
    return (
        <div>
            <Field
                validate={validate}
                placeholder={placeholder}
                component={component}
                name={name}
                type={type}
            />{text}
        </div>
    )
}