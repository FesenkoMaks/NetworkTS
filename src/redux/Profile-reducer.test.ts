import {actionCreatorAddPost, profileReducer} from "./Profile-reducer";

let internalState = {
    posts: [
        {id: 1, text: 'World', like: 33},
        {id: 2, text: 'Chelsea is champion', like: 3},
        {id: 3, text: 'Comon chelsea', like: 42},
        {id: 4, text: 'It-kamasutra', like: 12},
        {id: 5, text: 'Hou', like: 66},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

test('correct task should be deleted from correct array', () => {
    const action = actionCreatorAddPost( "todolistId2");
    const newState = profileReducer(internalState,action)

    expect(newState.posts.length).toBe(6);
    expect(newState.posts[5].text).toBe("todolistId2");
    expect(newState.posts[5].like).toBe(0);
    expect(newState.posts[5].id).toBe(7);

});