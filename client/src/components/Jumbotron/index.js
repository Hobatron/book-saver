import React, { Component } from 'react'
import { MDBJumbotron, MDBRow, MDBCol, MDBCardTitle } from "mdbreact"

export class Jumbotron extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol>
                        <MDBJumbotron style={{ padding: 0 }}>
                            <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                                <MDBCol className="py-5">
                                    <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Welcome to BookSearch</MDBCardTitle>
                                    <p className="mx-5 mb-5">Simply search for a book and click save to save it to the database! (Created using MERN stack repo: #)</p>
                                </MDBCol>
                            </MDBCol>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default Jumbotron
