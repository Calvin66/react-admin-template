/*
 * @Descripttion: 路由
 * @version:
 * @Author: Calvin
 * @Date: 2021-09-07 21:46:27
 */
import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from '@/layout';
import Login from '@/views/Login';

class Router extends Component {
  render() {
    const { token } = this.props;
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />;
              }
              return <Layout />;
            }} />
        </Switch>

      </HashRouter>

    );
  }
}
const mapStateToProps = (state) => ({
  token: state.user.token,
});
export default connect(mapStateToProps)(Router);
