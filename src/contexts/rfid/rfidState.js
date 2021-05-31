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
			type: "SET_QR",
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
				qr: '',
				isIdentificate: false
			}
		});
		console.log(state.isno);
	};

	return (<RFIDContext.Provider
		value={{
			isno: state.isno,
			email: state.email,
			isim: state.isim,
			soyisim: state.soyisim,
			tel: state.tel,
			rfid: state.rfid,
			grup: state.grup,
			isIdentificate: state.isIdentificate,
			handleRFin,
			handleQRin,
			handleRFChange,
			handleQRChange,
			handleOut
		}}>
			{props.children}
		</RFIDContext.Provider>);
}

export default RFIDState;
