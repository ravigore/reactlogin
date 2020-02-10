import React, { Component } from 'react'

export default class Profile extends Component {
    constructor(props){
    super(props)
    console.log("Here2",this.props.isOpenModal)
    }
    render() {
        debugger
        console.log("Here3",this.props.isOpenModal)
        const modalStatus = this.props.isOpenModal ? 'fade in displyblock': 'fade displaynone'
        return (
             <div className={`modal ${modalStatus}`} tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    
                    </div>
                </div>
            </div>
        )
    }
}
