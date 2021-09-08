/*
 * @Descripttion: 路由
 * @version: 
 * @Author: Calvin
 * @Date: 2021-09-07 21:46:27
 */
import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Layout from "@/layout";
import Login from "../views/Login";

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component = {Layout} />
        </Switch>

      </HashRouter>      

    )
  }
}

export default Router