import React, { useReducer } from "react";
import LoginReducer from './loginReducer';
import LoginContext from './loginContext';
import axios from "axios";

const LoginState = (props) => {
    const initialState = {
		isno: '',
        username: '',
        password: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		loading: false,
		isLogin: false
    };

    const [state, dispatch] = useReducer(LoginReducer, initialState);

	const setLoading = (bool) => {
		dispatch({
			type: "SET_LOADING",
			payload: bool,
		})
	}

	const didMount = () => {
		if(sessionStorage.getItem('token')){
			dispatch({
				type: "SET_ISLOGIN",
				payload: true,
			})
			console.log(state.isLogin)
		}
		// else{
		// 	dispatch({
		// 		type: "SET_ISLOGIN",
		// 		payload: false,
		// 	})
		// }
		if(state.isLogin){
			fetch('http://localhost:8000/api/current_user/', {
				method : 'GET',
				headers : {
					Authorization : `JWT ${sessionStorage.getItem('token')}`
				}
			})
			.then(res => res.json())
			.then(json => {
				dispatch({
					type: "SET_USERNAME",
					payload: json.username
				})
				return(axios.get(`http://localhost:8000/api/sarfKullanicilar/${json.username}?format=json`))
				})
			.then(res => {
				dispatch({
					type: "SET_OTHERS",
					payload: res.data
				})
			})
			.catch(err => console.log(err));
		}
	}

	const handleLogin = (e, data) => {
		e.preventDefault();
		setLoading(true)
		fetch('http://localhost:8000/token-auth/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
				body: JSON.stringify(data)
			}
			)
			.then(res => res.json())
			.then(json => {
				sessionStorage.setItem('token', json.token);
				dispatch({
					type: "SET_USERNAME",
					payload: json.user.username
				})
				dispatch({
					type: "SET_ISLOGIN",
					payload: true
				})
			})
			.catch(res => console.log(res));
		setTimeout(() => {
			axios
				.get(`http://localhost:8000/api/sarfKullanicilar/${state.username}?format=json`)
				.then(res => {
					dispatch({
						type: "SET_OTHERS",
						payload: res.data
					})
					setLoading(false)
				})
		}, 1000);
	};

	const handleLoginChange = event => {
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

	const handleLogout = () => {
		sessionStorage.removeItem('token');
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
			loading: state.loading,
			setLoading,
			handleLogin,
			handleLoginChange,
			handleLogout,
			didMount
		}}>
			{props.children}
		</LoginContext.Provider>);
}

export default LoginState;
