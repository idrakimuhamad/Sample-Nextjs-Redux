import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

export const reducer = (state = { lastUpdated: 0, light: false }, action) => {
    switch (action.type) {
        case 'TICK': return { lastUpdated: action.ts, ligth: !!action.light }
        default: return state
    }
}

export const startClock = () => dispatch => {
    setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now() }), 800)
}

export const initStore = (reducer, initialState, isServer) => {
    if (isServer && typeof window == 'undefined') {
        return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
    } else {
        if (!window.store) {
            window.store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
        }

        return window.store;
    }
}
