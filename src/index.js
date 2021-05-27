import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoginState from './contexts/login/loginState';
import OpenSelectedState from './contexts/openSelected/openSelectedState'

ReactDOM.render(
    <LoginState>
        <OpenSelectedState>
            <App />
        </OpenSelectedState>
    </LoginState>, 
    document.getElementById('root')
);
    
