import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import components here
import Article from './Components/Article'
import Media from './Components/Media'
import Whiteboard from './Components/Whiteboard'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={}></Route>
            <Route path='/articles' component={Article}></Route>
            <Route exact path='/videos' component={Media}></Route>
            <Route exact path='/whiteboarding' component={Whiteboard}></Route>
        </Switch>
    );
}

export default Router