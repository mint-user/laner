import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../Auth'

export const useRoutes = isAutheticated => {
    if (isAutheticated){
        return(
            <Switch>
                <Route path="/" exact>
                    <div>Main authenticated</div>
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