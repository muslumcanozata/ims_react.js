const RFIDReducer = (state, action) => {
    switch(action.type) {
        case "GET_PERSONELWRFID":
            return {
                ...state,
                isno: action.payload.isno,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                tel: action.payload.tel2,
                grup: action.payload.grup
            }
        case "GET_PERSONELWQR":
            return {
                ...state,
                isno: action.payload.isno,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                rfid: action.payload.rfid,
                tel: action.payload.tel2,
                grup: action.payload.grup
            }
        case "SET_RFID":
            return {
                ...state,
                rfid: action.payload
            }
        case "SET_QR":
            return {
                ...state,
                qr: action.payload
            }
        case "SET_ISIDENTIFICATE":
            return {
                ...state,
                isIdentificate: action.payload
            }
        case "OUT":
            return {
                isno: action.payload.isno,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                tel: action.payload.tel,
                rfid: action.payload.rfid,
                grup: action.payload.grup,
                isIdentificate: action.payload.isIdentificate
            }
        default:
            return state
    }
}

export default RFIDReducer;