import React from 'react';
const News=React.lazy(()=>import('app_introduction/Mod'));
class App extends React.Component{
    render(){
    return(
        <div> 
            <p> Hello This is Contact page </p>
            <button> Contact page </button>
            <React.Suspense fallback="loading..">
             <News />
         </React.Suspense>
        </div>
    );
}
}

export default App;