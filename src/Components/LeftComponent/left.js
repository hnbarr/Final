import React, { Component } from 'react'
import './Left.css'

export default class LeftComponent extends Component {
    render() {
        return (
            <div id='left'>
                <section id='left-top'>
                    <p>TOP</p>
                </section>

                <section id='left-bottom'>
                    <p>BOTTOM</p>
                </section>
            </div>
        )
    }
}
