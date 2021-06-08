const LoadingReducer = ( state, action) => {
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
    }
}

export default LoadingReducer;