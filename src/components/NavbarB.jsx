'use client'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../app/styles/Navbar.css";
import Link from "next/link";

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
				<Link href="/menu" passHref><p>MENU</p></Link>
				<Link href="/formulario" passHref><p>FORMULARIO</p></Link>
				<Link href="/fetcheo" passHref><p>ESTUDIANTES</p></Link>
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