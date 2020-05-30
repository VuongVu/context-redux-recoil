import React, { useState, useEffect } from 'react';

function CountButton({ onClick, count }) {
    return <button onClick={onClick}>{count}</button>;
}

function CounterWinner({ count1, count2 }) {
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (count1 > count2) {
            setWinner('Winner is left side');
        } else if (count1 < count2) {
            setWinner('Winner is right side');
        } else {
            setWinner('Do not have winner :)');
        }
    }, [count1, count2]);

    return <p>{winner}</p>;
}

function DualCounter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = () => setCount1((c) => c + 1);
    const increment2 = () => setCount2((c) => c + 1);

    return (
        <>
            <CounterWinner count1={count1} count2={count2} />
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
