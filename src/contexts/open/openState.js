import { useReducer } from "react";
import OpenContext from './openContext';
import OpenReducer from './openReducer';

const OpenState = (props) => {
    const initialState = {
        open: false
    }

    const [state, dispatch] = useReducer(OpenReducer, initialState);

	const setOpen = (value) => {
		if(value!== state.open){
			dispatch({
				type: "SET_OPEN",
				payload: value
			})
		}
	}

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (<OpenContext.Provider
			value={{
				open: state.open,
				setOpen,
				handleDrawerOpen,
				handleDrawerClose
			}
		}>
			{props.children}
		</OpenContext.Provider>);
}

export default OpenState;
