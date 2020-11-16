import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../Auth'
import { MainLayout } from '../MainLayout'

export const useRoutes = isAutheticated => {
    const test = () => {
        console.log('TEST')
    }
    if (isAutheticated){
        return(
            <Switch>
                <Route path="/" exact>
                    <MainLayout />
                </Route>
                <Route path="/logout" exact>
                    {test}
                </Route>                
                <Redirect to="/" />
            </Switch>
        )
    } else {
        return(
            <Switch>
                <Route path="/sign_in" exact>
                    <Login />
                </Route>
                <Redirect to="sign_in" />
            </Switch> 
        )
    }
}