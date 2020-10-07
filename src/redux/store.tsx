
export type PostType = {
    text: string,
    id: number,
    like: number
}

export type MessageType = {
    message: string,
    id: number
}

export type DialogsType = {
    name: string,
    id: number
}


export type DialogsDataTypes = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
}

