import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateRace from '../components/form/CreateRace'
import Nav from '../components/Nav/Nav'
import Home from '../components/views/Home'
import Landing from '../components/views/Landing'
import './index.css'
const index = () => {
    return (
        <div className='divIndex'>
        <header>    
        <Route exact path='/' component={Landing}/> 
        <Route path='/main' component={Nav}/>
        </header>
        <Switch>
            <Route exact path='/main' component={Home}/>
            <Route path='/main/create_race' component={CreateRace}/>
        </Switch>
        </div>
    )
}

export default index
