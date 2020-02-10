import React, { Component } from 'react'
import { history } from '../helpers/history';
import Profile from './Profile';

export default class HomePage extends Component {
    constructor(props) {
     super(props);
     this.state = {
        displayMenu: false,
        isOpenModal: false
      };
    }
    
    showDropdownMenu = (e)=>{
        e.preventDefault();
        this.setState({ displayMenu: true }, () => {
        });
    }
    hideDropdownMenu = (e)=>{
        e.preventDefault();
        this.setState({ displayMenu: false }, () => {
        });
    }
    showProfile =(e)=>{
        debugger
        this.setState({ isOpenModal: !this.state.isOpenModal });
    }
    logoutMe =(e)=>{
        localStorage.setItem("username","");
        history.push("/");
    }
    render() {
      const useremail = localStorage.getItem("username");
      const modalStatus = this.state.isOpenModal ? 'fade in displyblock': 'fade displaynone'
debugger
        return (
        <div>
          <nav className="navbar navbar-expand-lg nav-custom fixed-top">
            <div className="navbar-header d-flex col">
                <a className="navbar-brand" href="#"><i className="fa fa-cube pr-2"></i>My<b>Site</b></a>  		
            </div>
            <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a href="#" onClick={this.showDropdownMenu} className="nav-link dropdown-toggle"><i className="fa fa-user-circle-o fa-lg p-2"></i>{useremail}</a>
                        { this.state.displayMenu ? (
                        <ul onMouseLeave={this.hideDropdownMenu} className={`dropdown-menu ${this.state.displayMenu ? 'show':''}`}>
                            <li><span onClick={this.showProfile} className="dropdown-item"><i className="fa fa-user-o"></i> Profile</span></li>
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
        <div className={`modal ${modalStatus}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                    </div>
                </div>
        </div>
        {/* <Profile isOpenModal={this.state.isOpenModal}/> */}
        </div>
        )
    }
}
