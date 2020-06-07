import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './app';
const Introduction=React.lazy(() => import('app_introduction/AppContainer'));
const Contact=React.lazy(() => import('app_contact/AppContainer'));
const Navigation=React.lazy(()=>import('app_introduction/Navigation'));
//const Introduction=React.lazy(()=>require('app_introduction/AppContainer'));
//const Navigation=React.lazy(()=>require('app_introduction/Navigation'));

const Routes = () =>{
    return(
    <Router>
           
        <div> 
        <React.Suspense fallback="loading ..">
            <Navigation />
            <Switch>
            
            
             <Route path="/contact"> <Contact /> </Route>
             <Route path="/introduction"> <Introduction /> </Route>
             <Route path="/"> <Home /> </Route>
             
             </Switch>
             </React.Suspense>
        </div>
        </Router>
    );
}

export default Routes;
