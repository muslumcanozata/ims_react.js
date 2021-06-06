import { useReducer } from 'react';
import ProductsReducer from './productsReducer';
import ProductsContext from './productsContext';
import axios from "axios";
import {BasketItem} from '../../models/basketItem';


const ProductsState = (props) => {
    const initialState = {
        availableProducts : [],
        basket: [/*'verilenadet': 3, 'istenilenadet': 3, 'per_isno': 22222, 'kull_isno': 11111, 'urun_id': 5*/]
    }

    const addBasketItem = (urunid, name, istenilen, amount ) => {
        
        
        var basketItem = new BasketItem(name, amount, istenilen, 1111, 22222, urunid);
        console.log(basketItem)
        state.basket.push(basketItem);
    }
    
    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    
    const getBasket = () => {
        return state.basket;
    }

    const postBasket = () => {
        fetch('http://localhost:8000/api/urunHareketler/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},

		body: JSON.stringify(state.basket)
		})
		.then(res => res.json())
		.then(json => {
				console.log(json)
	     	})
 		.catch(res => console.log(res.json().non_field_errors[0]));
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
            addBasketItem,
            getBasket
        }}>
        {props.children}
    </ProductsContext.Provider>)
}

export default ProductsState;