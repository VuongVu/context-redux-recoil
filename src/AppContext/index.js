import React from 'react';

import { CountProvider } from './CounterContext';
import Counter from './Counter';

function App() {
    return (
        <CountProvider>
            <Counter />
        </CountProvider>
    );
}

export default App;
