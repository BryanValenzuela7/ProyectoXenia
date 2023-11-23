'use client'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app/styles/Navbar.css";

function NavbarB() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/">LOGIN</a>
				<a href="/login">####</a>
				<a href="/formulario">FORMULARIO</a>
				<a href="/fetcheo">ESTUDIANTES</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavbarB;