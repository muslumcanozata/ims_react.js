import { useReducer, useContext} from "react";
import RFIDReducer from './rfidReducer';
import RFIDContext from './rfidContext';
import axios from "axios";

import ProductsContext from '../availableProducts/productsContext'

const RFIDState = (props) => {
    const initialState = {
        isno: [],
        email: '',
        isim: '',
        soyisim: '',
        tel: '',
        rfid: '',
        grup: '',
		qr: '',
		availableProducts : [],
        basket: [/*'verilenadet': 3, 'istenilenadet': 3, 'per_isno': 22222, 'kull_isno': 11111, 'urun_id': 5*/],
		loading: false,
		isIdentificate: false
    };

    const [state, dispatch] = useReducer(RFIDReducer, initialState);

	const options = {
        headers: {'Content-Type': 'application/json'}
    };

	const setLoading = (bool) => {
		dispatch({type: "SET_LOADING", payload: bool})
	}

	const handleRFin = (event, data) => {
		event.preventDefault();
		setLoading(true)
		setTimeout(() => {
			axios
				.get(`http://localhost:8000/api/personellerRF/${data.rfid}/?format=json`)
				.then(res => {
					dispatch({
						type: "GET_PERSONELWRFID",
						payload: res.data
					});
					return(axios.get(`http://localhost:8000/api/urunTeslim/?format=json&isno=${res.data.isno}`))
				})
				.then(res => {
					dispatch({
						type: "SET_PRODUCTS",
						payload: res.data
					})
					setLoading(false)
				})
		}, 3000);
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
		})
	};

	const handleQRin = (event, data) => {
		event.preventDefault();
		setLoading(true)
		setTimeout(() => {
			axios
				.get(`http://localhost:8000/api/personellerQR/${data.tel}/?format=json`)
				.then(res => {
					dispatch({
						type: "GET_PERSONELWQR",
						payload: res.data
					});
					return(axios.get(`http://localhost:8000/api/urunTeslim/?format=json&isno=${res.data.isno}`))
				})
				.then(res => {
					dispatch({
						type: "SET_PRODUCTS",
						payload: res.data
					})
					setLoading(false)
				})
		}, 3000);
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
		})
	};
	
	const handleIDin = () => {
		setLoading(true)
		setTimeout(() => {
			axios
				.get("http://localhost:8000/api/face_detect/")
				.then(response => {
					dispatch({
						type: "SET_ISNO",
						payload: response.data.isno
					})
					return(axios.get(`http://localhost:8000/api/personellerFace/${response.data.isno}/?format=json`))
				})
				.then(response => {
					console.log(response)
					dispatch({
						type: "GET_PERSONELWISNO",
						payload: response.data
					})
					return(axios.get(`http://localhost:8000/api/urunTeslim/?format=json&isno=${response.data.isno}`))
				})
				.then(res => {
					dispatch({
						type: "SET_PRODUCTS",
						payload: res.data
					})
					setLoading(false)
				})
				.catch(error => console.log(error.response))
		}, 3000);
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
		})
	}

	const handleRFChange = (event) => {
		dispatch({
			type: "SET_RFID",
			payload: event.target.value
		});
	};
	
	const handleQRChange = (event) => {
		dispatch({
			type: "SET_TEL",
			payload: event.target.value
		});
	};

	const handleOut = () => {
		dispatch({
			type: "OUT",
			payload: {
				isno: '',
				email: '',
				isim: '',
				soyisim: '',
				tel: '',
				rfid: '',
				grup: '',
				isIdentificate: false
			}
		});
		console.log(state.isno);
	};


	const getBasket = () => {
        return state.basket;
    }

    const postBasket = () => {
        axios.post('http://localhost:8000/api/urunHareketler/', JSON.stringify(state.basket), options)
            .then(res => res.json())
            .then(json => {
                    console.log(json)
                    })
            .catch(res => console.log(res.response));
    }

    const setBasket = (basketItems) => {
        dispatch({
            type: "SET_BASKET",
            payload: basketItems
        })
    }

	return (<RFIDContext.Provider
		value={{
			isno: state.isno,
			email: state.email,
			isim: state.isim,
			soyisim: state.soyisim,
			tel: state.tel,
			rfid: state.rfid,
			grup: state.grup,
			faceid: state.faceid,
			isIdentificate: state.isIdentificate,
			availableProducts: state.availableProducts,
			basket: state.basket,
			loading: state.loading,
			setLoading,
			postBasket,
			setBasket,
			getBasket,
			handleRFin,
			handleQRin,
			handleIDin,
			handleRFChange,
			handleQRChange,
			handleOut
		}}>
			{props.children}
		</RFIDContext.Provider>);
}

export default RFIDState;
