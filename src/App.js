import React ,{Component} from 'react';
import './App.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import HomePage from './components/HomePage'
import MainRouting from './components/MainRouting'
import { history } from './helpers/history';
import { Router, Route , Switch} from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
        });
    }
    render() {
        return (
          <div className="bkcolor">
            <Router history={history}>
                <Switch>
                        <MainRouting exact path="/" component={HomePage} />
                        <Route path="/login" component={Login} />
                </Switch>
                </Router>
            </div>
        )
    }
}