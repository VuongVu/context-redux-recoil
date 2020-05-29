import React, { createContext, useContext, useReducer } from 'react';

const CountStateContext = createContext();
const CountDispatchContext = createContext();

function countReducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return { count: state.count + 1 };
        }
        case 'decrement': {
            return { count: state.count - 1 };
        }
        case 'reset': {
            return { count: 0 };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function CountProvider({ children }) {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });

    return (
        <CountStateContext.Provider value={state}>
            <CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
        </CountStateContext.Provider>
    );
}

function useCountState() {
    const context = useContext(CountStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider');
    }
    return context;
}

function useCountDispatch() {
    const context = useContext(CountDispatchContext);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider');
    }
    return context;
}

export { CountProvider, useCountState, useCountDispatch };
