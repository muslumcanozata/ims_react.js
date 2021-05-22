const LoginReducer = (state, action) => {
    switch(action.type) {
        case "SET_USERNAME":
            return {
                ...state,
                username: action.payload,
            }
        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload
            }
        case "SET_ISLOGIN":
            return {
                ...state,
                isLogin: action.payload
            }
        default:
            return state
    }
}

export default LoginReducer;