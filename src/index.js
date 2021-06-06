import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AlertState from './contexts/alert/alertState'
import ProductsState from './contexts/availableProducts/productsState';
import LoginState from './contexts/login/loginState';
import OpenState from './contexts/open/openState'
import RFIDState from './contexts/rfid/rfidState'
import Alert1 from './components/Alert';

ReactDOM.render(
    <LoginState>
        <OpenState>
            <RFIDState>
                <ProductsState>
                    <AlertState>
                    
                        <App/>
                    </AlertState>
                </ProductsState>
            </RFIDState>
        </OpenState>
    </LoginState>, 
    document.getElementById('root')
);
    
