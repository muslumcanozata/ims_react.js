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
		isIdentificate: false
    };

    const [state, dispatch] = useReducer(RFIDReducer, initialState);

	const handleRFin = (event, data) => {
		event.preventDefault();

		axios
			.get(`http://localhost:8000/api/personeller/${data.rfid}?format=json`)
			.then(res => {
				dispatch({
					type: "GET_PERSONEL",
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

	const handleRFOut = () => {
		dispatch({
			type: "RFOUT",
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
			handleRFChange,
			handleRFOut
		}}>
			{props.children}
		</RFIDContext.Provider>);
}

export default RFIDState;
