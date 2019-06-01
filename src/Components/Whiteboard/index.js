import React, { Component } from 'react';
import './main.css'

export default class RightComponent extends Component {
    render() {
        return (
            <div id='right'>
                <section id='right-top'>
                    <p>TOP</p>
                </section>

                <section id='right-bottom'>
                    <p>BOTTOM</p>
                </section>
            </div>
        )
    }
}
