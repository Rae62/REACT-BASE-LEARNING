import React, { Component } from "react";
import ReactDOM from "react-dom";
import Composant1 from "./Composant1";
import Composant2 from "./Composant2";
import Composant3 from "./Composant3";
import "./index.css";
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";

class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    isLoggedIn:true
  }
}


  render() {
    return (
      <Router>
        <div>
          <div className="p-2 w-100 d-flex border">
            <NavLink activeClassName="active" to={
              {
                pathname: '/user/123',
                search: '?query=batman&language=fr-FR'
              }
            } className="m-2">Composant 1</NavLink>
            <NavLink to="/2" className="m-2">Composant 2</NavLink>
          </div>
          <div className="d-flex text-center flex-column justify-content-center align-items-center">
            <Switch>
              <Route path="/user/:id"  render={(props) =>
                 <Composant1 {...props} isLoggedIn = {true} />}></Route>
              <Route path="/2" component={Composant2}></Route>
              <Redirect from="/auth" to ="/2" />
              <Route component={Composant3}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));