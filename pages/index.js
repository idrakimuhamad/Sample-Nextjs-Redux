import React from 'react';
import Link from 'next/link'
import { Provider } from 'react-redux'
import { reducer, startClock, initStore } from '../redux/store'
import Clock from '../components/Clock'

export default class Counter extends React.Component {
    static getInitialProps({ req }) {
        const isServer = !!req
        const store = initStore(reducer, null, isServer)
        store.dispatch({ type: 'TICK', ts: Date.now() })

        return { initialState: store.getState(), isServer }
    }

    constructor(props) {
        super(props)
        this.store = initStore(reducer, props.initialState, props.isServer)
    }

    componentDidMount() {
        this.timer = this.store.dispatch(startClock())
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render () {
        return (
            <div>
                <Provider store={this.store}>
                    <Clock />
                </Provider>

                <Link href='/about'><a>About</a></Link>
            </div>
        )
    }
}
