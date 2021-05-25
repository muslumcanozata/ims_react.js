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
        case "SET_OTHERS":
            return {
                ...state,
                isno: action.payload.isno,
                email: action.payload.email,
                first_name: action.payload.isim,
                last_name: action.payload.soyisim,
                phone: action.payload.tel,
            }
        default:
            return state
    }
}

export default LoginReducer;