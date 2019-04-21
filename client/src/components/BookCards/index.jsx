import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBCard, MDBCardBody, MDBCardGroup, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import axios from "axios";

import "./index.css";


export class BookCard extends Component {
    state = {
        bookJSON: []
    };

    componentWillReceiveProps(newBooks) {
        if (newBooks.bookDetails !== []) {
            this.setState({
                bookJSON: newBooks.bookDetails
            });
        };
    };

    saveButtonHandler = (e) => {
        if (e.target.classList.contains("btn-deep-purple")) {
            let bookToSave = this.state.bookJSON.filter(book => {
                return book.id === e.target.getAttribute("data-id");
            })
            bookToSave = bookToSave[0];
            const bookInfo = {
                id: bookToSave.id,
                volumeInfo: {
                    title: bookToSave.volumeInfo.title,
                    authors: bookToSave.volumeInfo.authors,
                    description: bookToSave.volumeInfo.description,
                    imageLinks: { thumbnail: bookToSave.volumeInfo.imageLinks.thumbnail },
                    previewLink: bookToSave.volumeInfo.previewLink,
                }
            };
            axios.post("/api/add", { bookInfo })
        } else {
            let bookToDelete = e.target.getAttribute("data-id");
            axios.delete("/api/book/" + bookToDelete)
                .then((res) => {
                    if (res.data.deletedCount === 1) {
                        let updatedBooks = this.state.bookJSON.filter((books) => books.id !== bookToDelete);
                        this.setState({
                            bookJSON: updatedBooks
                        });
                    } else {
                        console.log(`Error: ${res}`)
                    }
                });
        };
    };

    render() {
        return (
            <div className="text-align-center">
                <MDBCardGroup className="position-inline-block">
                    {this.state.bookJSON.map(book => {
                        return (
                            <MDBCol className="test" key={book.id}>
                                <MDBCard className="mb-5 cardHover">
                                    <MDBCardImage
                                        src={book.volumeInfo.imageLinks.thumbnail}
                                        alt="MDBCard image cap"
                                        top
                                        hover
                                        overlay="white-slight"
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">
                                            <a href={book.volumeInfo.previewLink}>
                                                {book.volumeInfo.title}
                                            </a>
                                        </MDBCardTitle>
                                        <MDBCardText className="font-weight-bold">
                                            {book.volumeInfo.authors}
                                        </MDBCardText>
                                        <MDBCardText>
                                            {book.volumeInfo.description.slice(0, 55).trim() + "..."}
                                        </MDBCardText>
                                        <MDBBtn rounded color={this.props.btnColor} onClick={this.saveButtonHandler} size="md" data-id={book.id}>
                                            {this.props.btnText}
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                    })}
                </MDBCardGroup>
            </div>
        );
    };
};

export default BookCard;
