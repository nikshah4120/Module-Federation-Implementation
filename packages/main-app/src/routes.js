import React from 'react';
import {Route,BrowserRouter as Router,Switch,Link} from 'react-router-dom';
const Home=React.lazy(() => import('app_home/AppContainer'));
const Introduction=React.lazy(() => import('app_introduction/AppContainer'));
//const Contact=React.lazy(() => import('app_contact/AppContainer'));
//import Navigation from './navigation';
const Routes = () =>{
    return(
    <Router>
        <div> 
            <React.Suspense fallback="loading">
                <Home />
                <Introduction />
            </React.Suspense>
        </div>
        </Router>
    );
}

export default Routes;
