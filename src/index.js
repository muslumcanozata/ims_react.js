import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import LoginState from './contexts/login/loginState';

ReactDOM.render(
    <LoginState>
        <App />
    </LoginState>, 
    document.getElementById('root')
);
    
