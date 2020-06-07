import React from 'react';
//const News=React.lazy(()=>import('app_introduction/Mod'));
class App extends React.Component{
    render(){
    return(
        <div> 
         <p> This is Home page </p>
         <button> Home page </button>
         <React.Suspense fallback="loading..">
         </React.Suspense>
        </div>
    );
}
}

export default App;