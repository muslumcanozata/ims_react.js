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
		isIdentificate: false,
    }

    const [state, dispatch] = useReducer(RFIDReducer, initialState);

	const handleRFin = (e, data) => {
		e.preventDefault();

		axios
			.get(`http://localhost:8000/api/personeller/${state.rfid}?format=json`)
			.then(res => {
				dispatch({
					type: "SET_OTHERS",
					payload: res.data
				})
			})
		console.log(state.rfid)
	};

	const handleRFChange = (event) => {
		dispatch({
			type: "SET_RFID",
			payload: event.target.value
		})
	}

	const handleRFOut = () => {
		dispatch({
			type: "SET_ISIDENTIFICATE",
			payload: false
		})
		dispatch({
			type: "SET_RFID",
			payload: ''
		})
		dispatch({
			type: "SET_OTHERS",
			payload: {
				isno: '',
                email: '',
                first_name: '',
                last_name: '',
                phone: '',
			}
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
			isIdentificate: state.isIdentificate,
			handleRFin,
			handleRFChange,
			handleRFOut,
		}}>
			{props.children}
		</RFIDContext.Provider>);
}

export default RFIDState;
