import React, { Component } from 'react'
import { history } from '../helpers/History';
import Profile from './Profile';

export default class HomePage extends Component {
    state = {
        displayMenu: false,
        toggle: false
      };
    toggle = ()=>{
        this.setState({
          toggle: !this.state.toggle
        });
      }
    showDropdownMenu = (e)=>{
        e.preventDefault();
        this.setState({ displayMenu: true});
    }
    hideDropdownMenu = (e)=>{
        e.preventDefault();
        this.setState({ displayMenu: false });
    }
    logoutMe =(e)=>{
        localStorage.setItem("username","");
        history.push("/");
    }
    updateStateInfo = ({displayMenu=this.state.displayMenu, toggle=this.state.toggle}) =>{
        this.setState({
            displayMenu,
            toggle
        })
    }

    render() {
      const useremail = localStorage.getItem("username");
        return (
        <div>
          <nav className="navbar navbar-expand-lg nav-custom">
            <div className="navbar-header d-flex col">
                <a className="navbar-brand" href="/#"><i className="fa fa-cube pr-2"></i>My<b>Site</b></a>
            </div>
            <div className="col-md-5">
            <div className="input-group"> <input type="text" className="form-control input-text" placeholder="Search "/>
                <div className="input-group-append"> <button className="btn btn-outline-warning btn-sm" type="button"><i className="fa fa-search"></i></button> </div>
            </div>
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a href="/#" onClick={this.showDropdownMenu} className="nav-link dropdown-toggle"><i className="fa fa-user-circle-o fa-lg p-2"></i>{useremail}</a>
                        { this.state.displayMenu ? (
                        <ul onMouseLeave={this.hideDropdownMenu} className={`dropdown-menu ${this.state.displayMenu ? 'show':''}`}>
                            <li><span  onClick={this.toggle} className="dropdown-item"><i className="fa fa-user-o"></i> Profile</span></li>
                            <li className="divider dropdown-divider"></li>
                            <li><span onClick={this.logoutMe} className="dropdown-item"><i className="fa fa-sign-out"/> Logout</span></li>
                        </ul>
                    ):
                    (
                    null
                    )}
                    </li>
                </ul>
            </div>
        </nav>
        {/* <a className="btn" onClick={this.toggle}>{this.state.showProfile ? 'Close modal' : 'Open modal'}</a> */}
         <Profile updateHomeState={this.updateStateInfo} homeInfo={this.state}/>
        </div>
        )
    }
}
