import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import AppContext from './AppContext';
// import AppRedux from './AppRedux';
// import AppRecoil from './AppRecoil';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <App />
        {/* <AppContext /> */}
        {/* <AppRedux /> */}
        {/* <AppRecoil /> */}
    </React.StrictMode>,
    document.getElementById('root'),
);
