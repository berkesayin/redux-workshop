const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGNED IN':
            return !state
        default:
            return state
    }
}

export default loggedReducer;