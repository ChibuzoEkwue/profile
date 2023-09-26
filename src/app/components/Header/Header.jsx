import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
const Header = () => {
	return (
		<header className={styles.header}>
			<div className="container">
				<nav>
					<Link href={"/"} className={styles.logo}>
						Chibuzo
					</Link>
					<ul className={styles.menu}>
						<li>
							<Link href={"/projects"}>Projects</Link>
						</li>
						<li>
							<Link href={"/blogs"}>Blogs</Link>
						</li>
						<li>
							<a  target="_blank" href="https://www.linkedin.com/in/chibuzoekwue/details/certifications/">
								Credentials
							</a>
						</li>
						{/* <li>
							<Link href={"/contacts"}>Contact</Link>
						</li> */}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
