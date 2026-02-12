
import React from "react";
import './../styles/App.css';
import Home from './Home'
import About from './About'
import { Route, Switch ,Link } from "react-router-dom";

const App = () => {
  return (
    <div>
    
     
      <ul>
              <li><Link to ='/'>Home</Link></li>
              <li><Link to ='/about'>About</Link></li>
      </ul>

        <Switch>
          <Route exact path="/" component={<Home/>} />
    <Route path='/about' element={<About/>} />
        </Switch>
   
  
    </div>
  )
}

export default App
