import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FindOne, FindAll, FindCity, FindState } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function UImock() {
    return (
        <Router>

            <Switch>
                <Route path="/findone" exact component={FindOne} />
                <Route path="/findall" exact component={FindAll} />
                <Route path="/findcity" exact component={FindCity} />
                <Route path="/findstate" exact component={FindState} />
            </Switch>
        </Router>
    )
}

export default UImock
