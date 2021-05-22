import { useReducer } from "react";
import LoginReducer from './loginReducer';
import LoginContext from './loginContext';

const LoginState = (props) => {
    const initialState = {
        username: '',
        password: '',
        isLogin: false
    }

    const [state, dispatch] = useReducer(LoginReducer, initialState);

	const didMount = () => {
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
	}

	const handleLogin = (e, data) => {
		e.preventDefault();
		fetch('http://localhost:8000/token-auth/', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(data)
		})
		  .then(res => res.json())
		  .then(json => {
			localStorage.setItem('token', json.token);
			dispatch({
				type: "SET_USERNAME",
				payload: json.user.username
			})
			dispatch({
				type: "SET_ISLOGIN",
				payload: true
			}
			)
		  });
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
		localStorage.removeItem('token');
		dispatch({
			type: "SET_ISLOGIN",
			payload: false
		})
		dispatch({
			type: "SET_USERNAME",
			payload: ''
		})
	}

	return <LoginContext.Provider
		value={{
			username: state.username,
			password: state.password,
			isLogin: state.isLogin,
			handleLogin,
			handleLoginChange,
			handleLogout,
			didMount
		}}>
			{props.children}
		</LoginContext.Provider>
}

export default LoginState;
