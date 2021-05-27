const LoginReducer = (state, action) => {
    switch(action.type) {
        case "GET_PERSONEL":
            return {
                ...state,
                isno: action.payload.isno,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                tel: action.payload.tel,
                grup: action.payload.grup
            }
        case "SET_RFID":
            return {
                ...state,
                rfid: action.payload
            }
        case "SET_ISIDENTIFICATE":
            return {
                ...state,
                isIdentificate: action.payload
            }
        default:
            return state
    }
}

export default LoginReducer;