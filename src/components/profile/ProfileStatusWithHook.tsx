import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

function ProfileStatusWithHook (props: PropsType) {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    let onEditMode = () => {
        setEditMode(true)
    }

    let offEditMode = () => {
        props.updateProfileStatus(status)
        setEditMode(false)
    }

    let onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
        return (
            <>
                {editMode ?
                    <div >
                        <input onChange={onStatusChange} value={status} onBlur={offEditMode} autoFocus={true}/>
                    </div>
                    : <div >
                        <span onDoubleClick={onEditMode}>{status ? status : '----'}</span>
                    </div>
                }
            </>
        )
}

export default ProfileStatusWithHook;