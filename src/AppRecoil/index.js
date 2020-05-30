import React from 'react';

import { RecoilRoot } from 'recoil';

// import Counter from './Counter';
import Users from './Users';
import ErrorBoundary from '../ErrorBoundary';

function App() {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                    {/* <Counter /> */}
                    <Users />
                </ErrorBoundary>
            </React.Suspense>
        </RecoilRoot>
    );
}

export default App;
