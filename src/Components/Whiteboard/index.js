import React, { Component } from 'react';
import './main.css'

export default class Whiteboard extends Component {
    render() {
        return (
            <div id='whiteboard'>
                <section id='whiteboard-top'>
                    <p>TOP</p>
                    <p>White boarding question of the day!</p>
                    <p>api data to generate a random question for students to work on</p>
                </section>

                <section id='whiteboard-bottom'>
                    <p>BOTTOM</p>
                </section>
            </div>
        )
    }
}
