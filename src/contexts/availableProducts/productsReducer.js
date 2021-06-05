const ProductsReducer = (state, action) => { 
    switch(action.type){
        case "SET_PRODUCTS":
            return {
                ...state,
                availableProducts: action.payload
            }
        case "SET_BASKET":
            return {
                ...state,
                basket: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default ProductsReducer;