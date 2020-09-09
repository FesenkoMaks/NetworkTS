import React, {useEffect, useState} from "react";


function ProfileStatusWithHook (props: any) {

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

    let onStatusChange = (e: any) => {
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