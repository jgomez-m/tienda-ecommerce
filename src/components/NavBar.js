import React from 'react'
import logo from '../img/logo.svg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src={logo} className="App-logo" alt="logo" />
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link to="/" className="nav-link active" >Home</Link>
							</li>
							<li className="nav-item">
								<Link to="/category/deportivos" className="nav-link active" >Deportivos</Link>
							</li>
							<li className="nav-item">
								<Link to="/category/camionetas" className="nav-link active" >Camionetas</Link>
							</li>
						</ul>
					</div>
					<CartWidget />
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
