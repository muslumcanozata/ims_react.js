import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoginState from './contexts/login/loginState';
import OpenSelectedState from './contexts/openSelected/openSelectedState'
import RFIDState from './contexts/rfid/rfidState'

ReactDOM.render(
    <LoginState>
        <OpenSelectedState>
            <RFIDState>
                <App/>
            </RFIDState>
        </OpenSelectedState>
    </LoginState>, 
    document.getElementById('root')
);
    
