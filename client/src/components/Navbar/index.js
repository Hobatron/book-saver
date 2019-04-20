import React, { Component } from "react";
import {
	MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline
} from "mdbreact";

class NavbarPage extends Component {
	state = {
		isOpen: false,
		query: ''
	};

	queryGoogleBooks = () => {

	};

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	queryHandler = (event) => {
		this.setState({
			query: event.target.value
		});
	};

	submit = (event) => {
		if (event.which === 13) {
			this.props.search(this.state.query);
			event.preventDefault();
			//Make request to google
			this.setState({
				query: '',
			})
		}
	}

	render() {
		return (
			<div>
				<MDBNavbar color="indigo" dark expand="md">
					<MDBNavbarBrand>
						<strong className="white-text">Book Saver</strong>
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav left>
							<MDBNavItem>
								<MDBNavLink to="/">Search</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="/saved">Saved</MDBNavLink>
							</MDBNavItem>
						</MDBNavbarNav>
						<MDBNavbarNav right>
							<MDBNavItem>
								<MDBFormInline waves>
									<div className="md-form my-0">
										<input className="form-control mr-sm-2" onKeyPress={this.submit} value={this.state.query} onChange={this.queryHandler} type="text" placeholder="Search" aria-label="Search" />
									</div>
								</MDBFormInline>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
			</div>
		);
	};
};

export default NavbarPage;