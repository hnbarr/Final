import React, { Component } from 'react'
import './main.css'

export default class CenterComponent extends Component {
    render() {
        return (
            <div id='center'>
               <section id='center-top'>
                    <p>White boarding question of the day!</p>
                    <p>api data to generate a random question for students to work on</p>
                </section>

                <section id='center-bottom'>
                    <p>BOTTOM</p>
                </section> 
            </div>
        )
    }
}
