import React from 'react';
import { connect } from 'react-redux'

export default connect(state => state)(({ lastUpdated, light }) => {
    return (
        <div className={light ? 'clock light' : 'clock'}>
            {format(new Date(lastUpdated))}
            <style>
                {`
                    .clock {
                        padding: 15px;
                        display: inline-block;
                        color: #82FA58;
                        font: 50px menlo, monaco, monospace;
                        background-color: #000;
                    }

                    .light {
                        background: #aaa;
                    }
                `}
            </style>
        </div>
    )
})

const format = t => `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => n < 10 ? `0${n}` : n
