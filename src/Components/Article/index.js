import React, { Component } from 'react'
import './main.css'

export default class Articles extends Component {
    render() {
        return (
            <div id='article'>
                <section id='article-top'>
                    <p>TOP</p>
                </section>

                <section id='article-bottom'>
                    <p>BOTTOM</p>
                    <p>populate articles here!</p>
                </section>
            </div>
        )
    }
}
