import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AlertState from './contexts/alert/alertState'
import LoginState from './contexts/login/loginState';
import OpenState from './contexts/open/openState'
import RFIDState from './contexts/rfid/rfidState'

ReactDOM.render(
    <AlertState>
        <LoginState>
            <OpenState>
                <RFIDState>
                        <App/>
                </RFIDState>
            </OpenState>
        </LoginState>
    </AlertState>,
    document.getElementById('root')
);
    
