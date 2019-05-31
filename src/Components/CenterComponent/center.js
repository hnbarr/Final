import React, { Component } from 'react'
import './Center.css'

export default class CenterComponent extends Component {
    render() {
        return (
            <div id='center'>
               <section id='center-top'>
                    <p>TOP</p>
                </section>

                <section id='center-bottom'>
                    <p>BOTTOM</p>
                </section> 
            </div>
        )
    }
}
