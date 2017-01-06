import React from 'react';
import Link from 'next/link'
import { Provider } from 'react-redux'
import { reducer, startClock, initStore } from '../redux/store'
import Clock from '../components/Clock'
import Head from '../components/Head'

export default class Home extends React.Component {
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
            <div className="app">
                <Head />
                <Provider store={this.store}>
                    <div className="index-page">
                      <header className="index-page-header">
                        <nav className="w-100 center container">
                          <div className="pa3 pa4-ns">
                            <a className="link w2 dim black b f6 f5-ns dib mr3 grow-large border-box logo" href="#" title="Home">
                              <svg className="link white-90 hover-white" data-icon="skull" viewBox="0 0 32 32"><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                            </a>
                            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
                            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
                            <a className="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
                            <a className="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
                          </div>
                        </nav>
                      </header>
                    </div>
                </Provider>
            </div>
        )
    }
}
