import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, reset } from './store';

const Header = () => {
    return <div>Redux Counter Example</div>;
};

const CountDisplay = () => {
    const { count } = useSelector((state) => state);

    return <div>{`The current count is ${count}`}</div>;
};

const CounterActions = () => {
    const dispatch = useDispatch();

    const increCount = () => {
        dispatch(increment());
    };

    const decreCount = () => {
        dispatch(decrement());
    };

    const resetCount = () => {
        dispatch(reset());
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
