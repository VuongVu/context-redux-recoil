import React from 'react';
import ReactDOM from 'react-dom';

import AppContext from './AppContext';
// import AppRedux from './AppRedux';
// import AppRecoil from './AppRecoil';

import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <AppContext />
        {/* <AppRedux /> */}
        {/* <AppRecoil /> */}
    </React.StrictMode>,
    document.getElementById('root'),
);
