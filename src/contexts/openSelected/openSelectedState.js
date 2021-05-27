import { useReducer } from "react";
import OpenContext from './openSelectedContext';
import OpenReducer from './openSelectedReducer';

const OpenState = (props) => {
    const initialState = {
        open: false,
		selected: 0
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

	const setSelected = (value) => {
		dispatch({
			type: "SET_SELECTED",
			payload: value
		})
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
				selected: state.selected,
				setOpen,
				setSelected,
				handleDrawerOpen,
				handleDrawerClose
			}
		}>
			{props.children}
		</OpenContext.Provider>);
}

export default OpenState;
