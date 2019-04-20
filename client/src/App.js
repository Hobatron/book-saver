import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBContainer } from "mdbreact";

import "./index.css";

//Combonenets
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

//Pages
import Search from "./pages/Search";
import Saved from "./pages/Saved";


class App extends Component {

	state = {
		query: '',
		willRd: true,
	}

	search = (query) => {
		this.setState({
			query: query,
		})
	}

	render() {

		return (
			<Router>
				<div>
					<Navbar search={this.search} />
					<MDBContainer>
						<Jumbotron />
						<Route exact path="/" component={() => <Search search={this.state.query} />} />
						<Route path="/saved" component={() => <Saved willRd={this.state.willRd} />} />
					</MDBContainer>
				</div>
			</Router>

		);
	}
}

export default App;
