import React, { useState } from 'react';

function CountButton({ onClick, count }) {
    console.log('CountButton render');

    return <button onClick={onClick}>{count}</button>;
}

function DualCounter() {
    console.log('DualCounter render');
    const [count1, setCount1] = useState(0);
    const increment1 = () => setCount1((c) => c + 1);
    const [count2, setCount2] = useState(0);
    const increment2 = () => setCount2((c) => c + 1);

    return (
        <>
            <CountButton count={count1} onClick={increment1} />
            <CountButton count={count2} onClick={increment2} />
        </>
    );
}

function App() {
    return (
        <>
            <DualCounter />
        </>
    );
}

export default App;
