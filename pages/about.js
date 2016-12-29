import React from 'react';
import Link from 'next/link'

export default class About extends React.Component {
    static getInitialProps({ req }) {
        const isServer = !!req
        return { isServer }
    }

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <h1>{ this.props.isServer ? 'About from server' : 'About from client'}</h1>
                <Link href='/'><a>Home</a></Link>
            </div>
        )
    }
}
