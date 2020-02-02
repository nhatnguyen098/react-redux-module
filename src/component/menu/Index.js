import React from 'react';
import Routes from './../../Routes';
import {Route, Link} from 'react-router-dom';
const Index = () => {
  const MenuCustomLink = ({label, to, activeOnlyWhenExact}) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({match}) => {
          var class_name = match ? 'active' : '';
          return (
            <li className={`nav-item ${class_name}`}>
              <Link className="nav-link" to={to}>
                {label}<span className="sr-only">(current)</span>
              </Link>
            </li>
          );
        }}
      />
    );
  };
  const mapContentRoutes = arr => {
    var rs = null
    if(arr.length > 0) {
      rs = arr.map((item,index)=>{
        return <MenuCustomLink key = {index} label = {item.name} to = {item.path} activeOnlyWhenExact = {item.exact}/>
      })
    }
    return rs;
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">React-API</a>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {mapContentRoutes(Routes)}
        </ul>
      </div>
    </nav>
  );
};

export default Index;
