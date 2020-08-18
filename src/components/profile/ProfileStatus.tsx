import React from "react";


class ProfileStatus extends React.Component<any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    onEditMode () {
        this.setState({
            editMode: true
        })
    }

    offEditMode () {
        this.props.updateProfileStatus(this.state.status)
        this.setState({
            editMode: false
        })
    }

    onStatusChange = (e: any) => {
        this.setState(
            {
                status: e.currentTarget.value
            }
        )
    }

    componentDidUpdate(previewProps:any, previewState:any) {
        if (previewProps.status !== this.props.status){
            console.log('1')
            this.setState({
                status: this.props.status
            })
        }
        console.log('didUpdt')
    }

    render() {
        return (
            <>
                {this.state.editMode ?
                    <div >
                        <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.offEditMode.bind(this)} autoFocus={true}/>
                    </div>
                    : <div >
                        <span onDoubleClick={this.onEditMode.bind(this)}>{this.props.status ? this.props.status : '----'}</span>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;