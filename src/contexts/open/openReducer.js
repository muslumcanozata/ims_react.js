const OpenReducer = (state, action) => {
    switch(action.type) {
        case "SET_OPEN":
            return {
                ...state,
                open: action.payload,
            }
        default:
            return state
    }
}

export default OpenReducer;