import { useReducer } from "react";
import RFIDReducer from './rfidReducer';
import RFIDContext from './rfidContext';
import axios from "axios";

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
		isIdentificate: false
    };

    const [state, dispatch] = useReducer(RFIDReducer, initialState);

	const handleRFin = (event, data) => {
		event.preventDefault();

		axios
			.get(`http://localhost:8000/api/personellerRF/${data.rfid}/?format=json`)
			.then(res => {
				dispatch({
					type: "GET_PERSONELWRFID",
					payload: res.data
				});
			});
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
		})
	};

	const handleQRin = (event, data) => {
		event.preventDefault();

		axios
			.get(`http://localhost:8000/api/personellerQR/${data.tel}/?format=json`)
			.then(res => {
				dispatch({
					type: "GET_PERSONELWQR",
					payload: res.data
				});
			});
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
		})
	};

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

	const handleIDin = () => {
		// const requestOne = axios.get(one);
		// const requestTwo = axios.get(two);

		// axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {

			// dispatch({
			// 	type: "SET_ISNO",
			// 	payload: responses[0]
			// })

			// dispatch({
			// 	type: "GET_PERSONELWISNO",
			// 	payload: responses[1]
			// })
		// 	// use/access the results 

		// })).catch(errors => {

		// // react on errors.

		// });

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
			})
			.catch(error => console.log(error.response))
		// axios
		// 	.get('http://localhost:8000/api/face_detect/')
		// 	.then(res => {
		// 		console.log(res)
		// 		console.log(res.data)

		// 		dispatch({
		// 			type: "SET_ISNO",
		// 			payload: res.data.isno
		// 		});
		// 	})	
		// 	.then(axios
		// 			.get(`http://localhost:8000/api/personellerFace/${state.isno}`)
		// 			.then(res => {
		// 				dispatch({
		// 					type: "GET_PERSONELWISNO",
		// 					payload: res.data
		// 				});
		// 			}));
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: true
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
