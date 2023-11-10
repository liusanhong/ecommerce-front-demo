import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import {API} from "./config";
import Routes from "./Routers";


console.log(API)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<SelfRouters />*/}
      <Routes />
  </React.StrictMode>
);


// ReactDOM.render(<App/>,document.getElementById('root') )

