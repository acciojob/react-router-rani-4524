import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render( <BrowserRouter>
      <StrictMode>
        <App/>
      </StrictMode>
    </BrowserRouter>, document.getElementById("root"));
