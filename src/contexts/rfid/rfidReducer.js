const RFIDReducer = (state, action) => {
    switch(action.type) {
        case "GET_PERSONELWRFID":
            return {
                ...state,
                isno: action.payload.isno,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                tel: action.payload.tel,
                grup: action.payload.grup,
                mudurluk: action.payload.mudurluk,
                cinsiyet: action.payload.cinsiyet
            }
        case "GET_PERSONELWQR":
            return {
                ...state,
                isno: action.payload.isno,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                rfid: action.payload.rfid,
                tel: action.payload.tel,
                grup: action.payload.grup,
                mudurluk: action.payload.mudurluk,
                cinsiyet: action.payload.cinsiyet
            }
        case "GET_PERSONELWISNO":
            return {
                ...state,
                email: action.payload.email,
                isim: action.payload.isim,
                soyisim: action.payload.soyisim,
                rfid: action.payload.rfid,
                tel: action.payload.tel,
                grup: action.payload.grup,
                mudurluk: action.payload.mudurluk,
                cinsiyet: action.payload.cinsiyet
            }
        case "SET_RFID":
            return {
                ...state,
                rfid: action.payload
            }
        case "SET_TEL":
            return {
                ...state,
                tel: action.payload
                }
        case "SET_ISIDENTIFICATE":
            return {
                ...state,
                isIdentificate: action.payload
            }
        case "SET_ISNO":
            return {
                ...state,
                isno: action.payload
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
                cinsiyet: action.payload.cinsiyet,
                mudurluk: action.payload.mudurluk,
                availableProducts: action.payload.availableProducts,
                basket: action.payload.basket,
                isIdentificate: action.payload.isIdentificate
            }
        case "SET_MUDURLUK":
            return {
                ...state,
                mudurluk: action.payload
            }
        case "SET_GRUP":
            return {
                ...state,
                grup: action.payload
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                availableProducts: action.payload
            }
        case "SET_BASKET":
            return {
                ...state,
                basket: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default RFIDReducer;