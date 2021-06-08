import { useReducer } from "react";
import LoadingContext from './loadingContext';
import LoadingReducer from './loadingReducer';

const LoadingState = (props) => {
    const initialState = {
        loading: false
    }

    const [state, dispatch] = useReducer(LoadingReducer, initialState);
    
    const setLoading = (data) => {
        dispatch({type:"SET_LOADING", payload: (data)})
    }

    return (<LoadingContext.Provider
        value={{
            loading: state.loading,
            setLoading
        }
    }>
        {props.children}
    </LoadingContext.Provider>);
}

export default LoadingState;