import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
import axios from 'axios';
import BookCards from '../../components/BookCards'

export class Saved extends Component {
	state = {
		bookJSON: []
	};

	componentDidMount() {
		axios.get("/api/books")
			.then((res) => {
				this.setState({
					bookJSON: res.data.books
				});
			});
	};
	render() {

		return (
			<div>
				<MDBContainer className="mt-5">
					<BookCards btnColor='danger' btnText="Remove" bookDetails={this.state.bookJSON} />
				</MDBContainer>
			</div>
		);
	};
};

export default Saved;
