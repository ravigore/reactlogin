import React, {Component} from 'react'

export default class Profile extends Component {
  closeModal = () => {
    this
      .props
      .updateHomeState({"toggle": false})
  }
  render() {
    const display = {
      display: 'block'
    };
    const hide = {
      display: 'none'
    };
    const modalStatus = this.props.homeInfo['toggle']
      ? display
      : hide
    return (
      <div className="modal" style={modalStatus} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Profile</h4>
              <button type="button" onClick={this.closeModal} className="close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body profile-bk">
              <div  className="col-12 d-flex flex-row-reverse">
              <button className="btn-sm btn-success" href="#"><i className="fa fa-edit"></i> Edit</button>
              </div>
              <div className="col-12 text-center">
                  <div className="profile-userpic">
                    <img
                      src="https://img.icons8.com/bubbles/300/000000/user.png"
                      className="img-responsive"
                      alt=""/>
                  </div>
                  <div className="mt-2">
                    <i className="fa fa-diamond pr-2"></i>
                    <b>Ravindra
                    </b>
                  </div>
                  <div className="mt-4">
                    Developer
                  </div>
                  <div className="mt-4">
                    <button type="button" className="btn btn-success btn mr-2">Follow</button>
                    <button type="button" className="btn btn-danger btn ml-2">Message</button>
                  </div>
                  <div className="mt-4">
                    <h5 className="mb-3">Social Links</h5>
                    <i className="fa fa-facebook fa-3x m-2"></i>
                    <i className="fa fa-twitter fa-3x m-2"></i>
                    <i className="fa fa-github fa-3x m-2"></i>
                    <i className="fa fa-instagram fa-3x m-2"></i>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}