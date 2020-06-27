import React from 'react';
import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';
import Contact from './app';
const Navigation=React.lazy(()=>import('app_introduction/Navigation'));
const Introduction=React.lazy(() => import('app_introduction/AppContainer'));
const Home=React.lazy(() => import('app_home/AppContainer'));
const Routes = () =>{
    return(
        <Router>
            <div>
            <React.Suspense fallback="loading ..">
            <Navigation />
                <Switch> 
                <Route path="/contact"> <Contact /> </Route>
                <Route path="/introduction"> <Introduction /> </Route>
                <Route path="/"><Home /></Route>  
                </Switch>
                </React.Suspense>
            </div>
        </Router>
    );
}

export default Routes;

/*
<Router>
        <div>
        <React.Suspense fallback="loading ..">
        <Navigation />
            <Switch> 
             <Route path="/contact"> <Contact /> </Route>
             <Route path="/introduction"> <Introduction /> </Route>
             <Route path="/"> <Contact /> </Route>  
             </Switch>
             </React.Suspense>
        </div>
        </Router>
*/