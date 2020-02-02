import React from 'react';
import './App.css';
import NavMenu from './component/menu/Index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Routes from './Routes';
const App = () => {
  const mapRouteMenu = val => {
    var rs = null;
    if (val.length > 0) {
      rs = val.map ((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exact}
            component={item.main}
          />
        );
      });
    }
    return rs;
  };
  return (
    <Router>
      <div className="App">
        {/* navbar */}
        <NavMenu />
        {/* Content */}
        <div className="container">
          <Switch>
            {mapRouteMenu (Routes)}
          </Switch>
        </div>

      </div>
    </Router>
  );
};

export default App;
