
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const MainRouting = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('username')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
export default MainRouting;