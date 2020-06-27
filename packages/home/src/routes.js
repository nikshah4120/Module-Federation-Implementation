import React from 'react';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import Home from './app';

function loadComponent(scope, module) {
    return async () => {
      // Initializes the share scope. This fills it with known provided modules from this build and all remotes
      await __webpack_init_sharing__("default");
      const container = window[scope]; // or get the container somewhere else
      // Initialize the container, it may provide shared modules
      await container.init(__webpack_share_scopes__.default);
      const factory = await window[scope].get(module);
      const Module = factory();
      return Module;
    };
  }
  
  const useDynamicScript = (args) => {
    const [ready, setReady] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
  
    React.useEffect(() => {
      if (!args.url) {
        return;
      }
  
      const element = document.createElement("script");
  
      element.src = args.url;
      element.type = "text/javascript";
      element.async = true;
  
      setReady(false);
      setFailed(false);
  
      element.onload = () => {
        console.log(`Dynamic Script Loaded: ${args.url}`);
        setReady(true);
      };
  
      element.onerror = () => {
        console.error(`Dynamic Script Error: ${args.url}`);
        setReady(false);
        setFailed(true);
      };
  
      document.head.appendChild(element);
  
      return () => {
        console.log(`Dynamic Script Removed: ${args.url}`);
        document.head.removeChild(element);
       };
    }, [args.url]);
  
    return {
      ready,
      failed,
    };
  };
  
function System(props) {
    const { ready, failed } = useDynamicScript({
      url: props.system && props.system.url,
    });
      if (!props.system) {
        return <h2>Not system specified</h2>;
      }
      if (!ready) {
        return <h2>Loading dynamic script: {props.system.url}</h2>;
      }
    
      if (failed) {
        return <h2>Failed to load dynamic script: {props.system.url}</h2>;
      }
  
    const Component = React.lazy(loadComponent(props.system.scope, props.system.module));
  
      return (
      <React.Suspense fallback="Loading System">
        <Component />
      </React.Suspense>
    );
  }


const Routes = () => {
    const [system, setSystem] = React.useState(undefined);
    
   const Contact={ url: "http://localhost:8081/remoteEntry.js",
   scope: "app_contact",
   module: "./AppContainer",
   }
   const Introduction={ url: "http://localhost:8082/remoteEntry.js",
    scope: "app_introduction",
    module: "./AppContainer",
   }
   const Navigation = { url: "http://localhost:8082/remoteEntry.js",
                    scope: "app_introduction",
                    module: "./Navigation"}
    return(
    <Router>
        <div>
           <System  system={Navigation} />
           <Switch>
           <Route path="/contact"> <System system={Contact}/> </Route>
           <Route path="/introduction"> <System system={Introduction}/> </Route>
           <Route path="/"> <Home /> </Route>  
           </Switch>
        </div>
    </Router>
    );
}

export default Routes;


