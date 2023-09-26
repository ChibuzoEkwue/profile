import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const HomePage = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.bio}>
					<div className={styles.profile}>
						<Image
							src={"/profile.jpg"}
							alt="chibuzo ekwue picture"
							width={300}
							height={300}
							className={styles.img}
						/>
					</div>
					<div className={styles.desc}>
						<h1>My name is Chibuzo Ekwue</h1>
						<h3>
							I &apos;am a full-stack web engineer skilled in React, Next js,
							Node.js, MongoDB and MySql
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
