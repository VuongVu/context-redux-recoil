import React from 'react';
import { atom, useRecoilValue, useSetRecoilState, useResetRecoilState } from 'recoil';

const counterState = atom({
    key: 'counterState',
    default: 0,
});

const Header = () => {
    return <div>Recoil Counter Example</div>;
};

const CountDisplay = () => {
    const count = useRecoilValue(counterState);

    return <div>{`The current count is ${count}`}</div>;
};

const CounterActions = () => {
    const setCounterState = useSetRecoilState(counterState);
    const resetCounterState = useResetRecoilState(counterState);

    const increCount = () => {
        setCounterState((prevState) => prevState + 1);
    };

    const decreCount = () => {
        setCounterState((prevState) => prevState - 1);
    };

    return (
        <div>
            <button onClick={increCount}>Increment count</button>
            <button onClick={decreCount}>Decrement count</button>
            <button onClick={resetCounterState}>Reset count</button>
        </div>
    );
};

function Counter() {
    return (
        <>
            <Header />
            <CountDisplay />
            <CounterActions />
        </>
    );
}

export default Counter;
