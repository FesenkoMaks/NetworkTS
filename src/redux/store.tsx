import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";

let rerenderDOM = (state: StateDataType) => {

}







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

export type PostDataTypes = {
    posts: Array<PostType>
    newPostText: string
    profile: any
}

export type DialogsDataTypes = {
    messageData: Array<MessageType>
    dialogsData: Array<DialogsType>
}

export type StateDataType = {
    dialogsPage: DialogsDataTypes
    myPostsPage: PostDataTypes
}

export type StoreType = {
    _state: StateDataType
    // addPost: () => void
    // addMessage: ()=> void
    // updateNewPostMessage:(newText:string) => void
    // updateNewMessage:(newText:string) => void
    subscribe:(observer: (state: any) => void) => void
    getState: () => StateDataType
    dispatch: (action:any) => void
}

// export let store: StoreType = {
//     _state:  {
//     dialogsPage: {
//         messageData: [
//             {message: 'Hi', id: 1},
//             {message: 'Hiaffaf', id: 2},
//             {message: 'Hafafaffai', id: 3},
//             {message: 'fagaga', id: 4},
//             {message: 'blr', id: 5},
//         ],
//         dialogsData: [
//             {name: 'Anton', id: 1},
//             {name: 'Ker4', id: 2},
//             {name: 'Vlad', id: 3},
//             {name: 'Gena', id: 4},
//             {name: 'Putin', id: 5}
//         ],
//         newMessageText: ''
//     },
//
//     myPostsPage: {
//         posts: [
//             {id: 1, text: 'World', like: 33},
//             {id: 2, text: 'Chelsea is champion', like: 3},
//             {id: 3, text: 'Comon chelsea', like: 42},
//             {id: 4, text: 'It-kamasutra', like: 12},
//             {id: 5, text: 'Hou', like: 66},
//         ],
//         newPostText: ''
//     }
// },
//     getState() {
//         return this._state
//     },
//     subscribe(observer: (state: StateDataType) => void) {
//         rerenderDOM = observer;
//     },
//
//
//     dispatch(action) {
//         this._state.myPostsPage = profileReducer(this._state.myPostsPage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         rerenderDOM(this._state)
//     }
//
//
// }
//
//
//
// export default store;


