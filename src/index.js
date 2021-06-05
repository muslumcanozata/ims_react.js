import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ProductsState from './contexts/availableProducts/productsState';
import LoginState from './contexts/login/loginState';
import OpenState from './contexts/open/openState'
import RFIDState from './contexts/rfid/rfidState'

ReactDOM.render(
    <LoginState>
        <OpenState>
            <RFIDState>
                <ProductsState>
                    <App/>
                </ProductsState>
            </RFIDState>
        </OpenState>
    </LoginState>, 
    document.getElementById('root')
);
    
