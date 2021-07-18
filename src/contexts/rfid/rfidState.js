import { useReducer } from "react";
import RFIDReducer from './rfidReducer';
import RFIDContext from './rfidContext';
import axios from "axios";

const RFIDState = (props) => {
    const initialState = {
        isno: '',
        email: '',
        isim: '',
        soyisim: '',
        tel: '',
        rfid: '',
        grup: '',
		qr: '',
		cinsiyet: '',
		mudurluk: '',
		availableProducts : [],
        basket: [],
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
				let one =`http://localhost:8000/api/urunTeslim/?format=json&isno=${res.data.isno}`
				let two = `http://localhost:8000/api/istihkakgrup/${res.data.grup}`;
				let three =`http://localhost:8000/api/mudurluk/${res.data.mudurluk}`;
				const requestOne = axios.get(one);
				const requestTwo = axios.get(two);
				const requestThree = axios.get(three);
				console.log(res.data)
				return(axios.all([requestOne, requestTwo, requestThree]))
				})
				.then(axios.spread((...responses) => {

					const responseOne = responses[0]
				  
					const responseTwo = responses[1]
				  
					const responseThree = responses[2]
				  
					dispatch({
						type: "SET_PRODUCTS",
						payload: responseOne.data
					})
					dispatch({
						type: "SET_GRUP",
						payload: responseTwo.data.i_isim
					})
					dispatch({
						type: "SET_MUDURLUK",
						payload: responseThree.data.m_isim
					})
					setLoading(false)
				}))
				.catch(errors => {
				  
					// react on errors.
				  
				})

			// axios
			// 	.get(`http://localhost:8000/api/personellerRF/${data.rfid}/?format=json`)
			// 	.then(res => {
			// 		dispatch({
			// 			type: "GET_PERSONELWRFID",
			// 			payload: res.data
			// 		});
			// 		console.log(res.data)
			// 		return(axios.get(`http://localhost:8000/api/urunTeslim/?format=json&isno=${res.data.isno}`))
			// 	})
			// 	.then(res => {
			// 		dispatch({
			// 			type: "SET_PRODUCTS",
			// 			payload: res.data
			// 		})
			// 		console.log(state.grup)
			// 		return(axios.get(`http://localhost:8000/api/istihkakgrup/${state.grup}`))
			// 	})
			// 	.then(res => {
			// 		dispatch({
			// 			type: "SET_GRUP",
			// 			payload: res.data.i_isim
			// 		})
			// 		console.log(state.mudurluk)
			// 		return(axios.get(`http://localhost:8000/api/mudurluk/${state.mudurluk}`))
			// 	})
			// 	.then(res => {
			// 		dispatch({
			// 			type: "SET_MUDURLUK",
			// 			payload: res.data.mudurluk
			// 		})
			// 		setLoading(false)
			// 	})
		}, 1000);
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
		})
	};

	const handleQRin = (event, data) => {
		event.preventDefault();
		setLoading(true)

		// let one =`http://localhost:8000/api/urunTeslim/?format=json&isno=${state.isno}`
		// let two = `http://localhost:8000/api/istihkakgrup/${state.grup}`
		// let three =`http://localhost:8000/api/mudurluk/${state.mudurluk}`

		// const requestOne = axios.get(one);
		// const requestTwo = axios.get(two);
		// const requestThree = axios.get(three);

		setTimeout(() => {
			axios
				.get(`http://localhost:8000/api/personellerQR/${data.tel}/?format=json`)
				.then(res => {
					dispatch({
						type: "GET_PERSONELWQR",
						payload: res.data
					});
					let one =`http://localhost:8000/api/urunTeslim/?format=json&isno=${res.data.isno}`
					let two = `http://localhost:8000/api/istihkakgrup/${res.data.grup}`;
					let three =`http://localhost:8000/api/mudurluk/${res.data.mudurluk}`;
					const requestOne = axios.get(one);
					const requestTwo = axios.get(two);
					const requestThree = axios.get(three);
					console.log(res.data)
					return(axios.all([requestOne, requestTwo, requestThree]))
				})
				.then(axios.spread((...responses) => {

					const responseOne = responses[0]
					
					const responseTwo = responses[1]
					
					const responseThree = responses[2]
					
					dispatch({
						type: "SET_PRODUCTS",
						payload: responseOne.data
					})
					dispatch({
						type: "SET_GRUP",
						payload: responseTwo.data.i_isim
					})
					dispatch({
						type: "SET_MUDURLUK",
						payload: responseThree.data.m_isim
					})
					setLoading(false)
				}))
				.catch(errors => {
				  
					// react on errors.
				  
				})
		}, 1000);
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
				.then(res => {
					dispatch({
						type: "SET_ISNO",
						payload: res.data.isno
					})
					return(axios.get(`http://localhost:8000/api/personellerFace/${res.data.isno}/?format=json`))
				})
				.then(res => {
					dispatch({
						type: "GET_PERSONELWISNO",
						payload: res.data
					})
					let one =`http://localhost:8000/api/urunTeslim/?format=json&isno=${res.data.isno}`
					let two = `http://localhost:8000/api/istihkakgrup/${res.data.grup}`;
					let three =`http://localhost:8000/api/mudurluk/${res.data.mudurluk}`;
					const requestOne = axios.get(one);
					const requestTwo = axios.get(two);
					const requestThree = axios.get(three);
					console.log(res.data)
					return(axios.all([requestOne, requestTwo, requestThree]))
				})
				.then(axios.spread((...responses) => {

					const responseOne = responses[0]
					
					const responseTwo = responses[1]
					
					const responseThree = responses[2]
					
					dispatch({
						type: "SET_PRODUCTS",
						payload: responseOne.data
					})
					dispatch({
						type: "SET_GRUP",
						payload: responseTwo.data.i_isim
					})
					dispatch({
						type: "SET_MUDURLUK",
						payload: responseThree.data.m_isim
					})
					setLoading(false)
				}))
				.catch(error => console.log(error.response))
		}, 1000);
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
				cinsiyet: '',
				mudurluk: '',
				availableProducts : [],
				basket: [],
				isIdentificate: false
			}
		});
		console.log(state.isno);
	};


	const getBasket = () => {
        return state.basket;
    }

    const postBasket = () => {
		console.log(state.basket)
        axios.post('http://localhost:8000/api/urunHareketler/',JSON.stringify(state.basket), options)
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

	const setFaceID = (data) => {
		setLoading(true)
		axios.get(`http://localhost:8000/api/user_face_detect/?isno=${data}`)
		.then(res => res.json())
		.then(json => {
				console.log(json)
				})
		.catch(res => console.log(res.response));
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
			cinsiyet: state.cinsiyet,
			mudurluk: state.mudurluk,
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
			handleOut,
			setFaceID
		}}>
			{props.children}
		</RFIDContext.Provider>);
}

export default RFIDState;
