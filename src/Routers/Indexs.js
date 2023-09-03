import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import DashBoard from '../pages/DashBoard';
import Home from '../components/Home';
import Userlist from '../components/Userlist';
import Adduser from '../components/Adduser';
import Updateuser from '../components/Updateuser';
import ProtectedRoutes from './ProtectedRoutes';

class Indexs extends Component {
    render() {
        return (
            <div>
                 <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={Userlist} />
              <Route exact path="/user/add" component={Adduser} />
              <Route exact path="/user/edit/:code" component={Updateuser} />
              <Route exact path="/dashboard" >
                <ProtectedRoutes>
                    <DashBoard/>
                </ProtectedRoutes>
              </Route>
            </Switch>
            </div>
        );
    }
}

export default Indexs;