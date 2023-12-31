import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";

//rsc
const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path={'/'} component={Home} exact />
                <Route path={'/shop'} component={Shop} exact />
            </Switch>
        </HashRouter>
    );
};

export default Routes;
