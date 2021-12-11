import React from 'react'
import logo from '../img/logo.svg';
import CartWidget from './CartWidget';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<img src={logo} className="App-logo" alt="logo" />
					<a className="navbar-brand" href="#">E-commerce Shop!!</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
						</ul>
					</div>
					{/* Includes the Cart Widget */}
					<CartWidget />
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
