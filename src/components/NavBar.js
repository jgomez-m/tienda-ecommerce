import React from 'react'
import logo from '../img/logo.svg';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">
						<img src={logo} className="App-logo" alt="logo" />
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="/category/deportivos">Deportivos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link active" href="/category/camionetas">Camionetas</a>
							</li>
						</ul>
					</div>
					<Link to={'/cart'}><CartWidget /></Link>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
