import React, {
	Component
} from 'react'
import {
	MDBContainer
} from "mdbreact";
import axios from 'axios';
import tempjson from './flowersResults.json';
import BookCards from '../../components/BookCards'

export class Search extends Component {
	state = {
		lastSearch: '',
		url: "https://www.googleapis.com/books/v1/volumes?q=",
		bookJSON: tempjson,
	};

	componentDidMount() {
		const query = this.props.search;
		if (query !== '' && this.state.lastSearch !== query) {
			axios.get(this.state.url + query)
				.then((res) => {
					res.data.items.forEach(i => {
						if (!i.volumeInfo.hasOwnProperty("description")) {
							i.volumeInfo.description = "No description available"
						};
						if (!i.volumeInfo.hasOwnProperty("imageLinks")) {
							i.volumeInfo.imageLinks = [];
						};
						if (!i.volumeInfo.imageLinks.hasOwnProperty("thumbnail") || i.volumeInfo.imageLinks === []) {
							i.volumeInfo.imageLinks.thumbnail = "https://www.thewrap.com/wp-content/uploads/2019/04/game-of-thrones-check-out-all-these-bran-stark-memes.jpg"
						};
					});
					this.setState({
						bookJSON: res.data.items,
						lastSearch: this.props.query
					});
				});
		};
	};

	render() {
		return ( <
			MDBContainer className = "mt-5" >
			<
			BookCards btnColor = 'deep-purple'
			btnText = "Save book"
			bookDetails = {
				this.state.bookJSON
			}
			/> <
			/MDBContainer>
		);
	};
};

export default Search