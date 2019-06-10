import React, { Component } from 'react'
import './main.css'

export default class Media extends Component {
    render() {
        return (
            <div id='media'>
               <section id='media-top'>
                    <p>TOP</p>
                </section>

                <section id='media-bottom'>
                    <p>BOTTOM</p>
                    <p>populate videos here!</p>
                </section> 
            </div>
        )
    }
}
