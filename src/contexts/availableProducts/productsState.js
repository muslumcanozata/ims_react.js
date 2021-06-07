import { useReducer } from 'react';
import ProductsReducer from './productsReducer';
import ProductsContext from './productsContext';
import axios from "axios";
import {BasketItem} from '../../models/basketItem';
import { useHistory } from 'react-router';


const ProductsState = (props) => {

    const initialState = {
        availableProducts : [],
        basket: [/*'verilenadet': 3, 'istenilenadet': 3, 'per_isno': 22222, 'kull_isno': 11111, 'urun_id': 5*/],
    }

    const options = {
        headers: {'Content-Type': 'application/json'}
    };
    
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    
    const getBasket = () => {
        return state.basket;
    }

    const postBasket = () => {
        axios.post('http://localhost:8000/api/urunHareketler/', JSON.stringify(state.basket), options)
            .then(res => res.json())
            .then(json => {
                    console.log(json)
                    })
            .catch(res => console.log(res.response));
    }

    const setBasket = (basketItems) => {
        dispatch({
            type: "SET_BASKET",
            payload: basketItems
        })
    }
    
    const getProducts = () => {
        axios
            .get('http://localhost:8000/api/urunTeslim/?format=json')
            .then(res => {
                dispatch({
                    type: "SET_PRODUCTS",
                    payload: res.data
                })
            })
        // fetch('http://localhost:8000/api/urunTeslim', {
        //     method: 'GET',
        //     headers: {
		// 		'Content-Type': 'application/json'
		// 	},
        // })
        //     .then(res => res.json())
        //     .then(json => {
        //         dispatch({
		// 			type: "SET_PRODUCTS",
		// 			payload: json.data
		// 		});
        //     })
    
    }

    return (<ProductsContext.Provider
        value={{
            availableProducts: state.availableProducts,
            basket: state.basket,
            getProducts,
            postBasket,
            getBasket,
            setBasket
        }}>
        {props.children}
    </ProductsContext.Provider>)
}

export default ProductsState;