import React from 'react';

import { useCountState, useCountDispatch } from './CounterContext';

const Header = () => {
    return <div>Context Counter Example</div>;
};

const CountDisplay = () => {
    const { count } = useCountState();
    return <div>{`The current count is ${count}`}</div>;
};

const CounterActions = () => {
    const dispatch = useCountDispatch();

    const increCount = () => {
        dispatch({ type: 'increment' });
    };

    const decreCount = () => {
        dispatch({ type: 'decrement' });
    };

    const resetCount = () => {
        dispatch({ type: 'reset' });
    };

    return (
        <div>
            <button onClick={increCount}>Increment count</button>
            <button onClick={decreCount}>Decrement count</button>
            <button onClick={resetCount}>Reset count</button>
        </div>
    );
};

export default function Counter() {
    return (
        <>
            <Header />
            <CountDisplay />
            <CounterActions />
        </>
    );
}
