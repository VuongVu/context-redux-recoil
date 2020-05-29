import React from 'react';
import ReactDOM from 'react-dom';

import whyDidYouRender from '@welldone-software/why-did-you-render';

// import AppContext from './AppContext';
// import AppRedux from './AppRedux';
import AppRecoil from './AppRecoil';

import './index.css';

whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'darkturquoise',
    include: [/^.*$/],
    trackHooks: true,
    // eslint-disable-next-line global-require
    trackExtraHooks: [[require('react-redux/lib'), 'useSelector']],
});

ReactDOM.render(
    <React.StrictMode>
        {/* <AppContext /> */}
        {/* <AppRedux /> */}
        <AppRecoil />
    </React.StrictMode>,
    document.getElementById('root'),
);
