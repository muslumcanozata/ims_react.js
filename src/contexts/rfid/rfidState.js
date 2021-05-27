import { useReducer } from "react";
import RFIDReducer from './rfidReducer';
import RFIDContext from './rfidContext';
import axios from "axios";

const LoginState = (props) => {
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

    const [state, dispatch] = useReducer(LoginReducer, initialState);

	const didMount = () => {
		if(localStorage.getItem('token')){
			dispatch({
				type: "SET_ISLOGIN",
				payload: true,
			})
		}
		else{
			dispatch({
				type: "SET_ISLOGIN",
				payload: false,
			})
		}
		if(state.isLogin){
			fetch('http://localhost:8000/api/current_user/', {
				method : 'GET',
				headers : {
					Authorization : `JWT ${localStorage.getItem('token')}`
				}
			})
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: "SET_USERNAME",
					payload: json.username
				})
			})
			.catch(err => console.log(err));
		}
		if(state.isLogin){
			axios
				.get(`http://localhost:8000/api/sarfKullanicilar/${state.username}?format=json`)
				.then(res => {
					dispatch({
						type: "SET_OTHERS",
						payload: res.data
					})
				})
		}
	}

	const handleRFin = (e, data) => {
		e.preventDefault();

		axios
			.get(`http://localhost:8000/api/sarfKullanicilar/${state.rfid}?format=json`)
			.then(res => {
				dispatch({
					type: "SET_OTHERS",
					payload: res.data
				})
			})
	};

	const handleRFChange = event => {
		if(event.target.name === 'username'){
			dispatch({
				type: "SET_USERNAME",
				payload: event.target.value
			})
		}
		else if (event.target.name === 'password') {
			dispatch({
				type: "SET_PASSWORD",
				payload: event.target.value
			})
		}
	}

	const handleRFout = () => {
		localStorage.removeItem('token');
		dispatch({
			type: "SET_ISLOGIN",
			payload: false
		})
		dispatch({
			type: "SET_USERNAME",
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

	return (<LoginContext.Provider
		value={{
			username: state.username,
			password: state.password,
			isLogin: state.isLogin,
			firstName: state.firstName,
			lastName: state.lastName,
			email: state.email,
			phone: state.phone,
			handleLogin,
			handleLoginChange,
			handleLogout,
			didMount
		}}>
			{props.children}
		</LoginContext.Provider>);
}

export default LoginState;
