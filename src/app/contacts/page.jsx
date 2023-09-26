"use client";
import React from "react";
import styles from "./page.module.css";

const page = () => {
	return (
		<section className={styles.section}>
			<form className={styles.form}>
				<div className={styles.formControl}>
					<label>Your Name</label>
					<input type="text" />
				</div>
				<div className={styles.formControl}>
					<label>Your Email</label>
					<input type="text" />
				</div>
				<div className={styles.formControl}>
					<label>What would you love to build</label>
					<textarea rows="10" cols="50"></textarea>
				</div>
				<button className={styles.btn} type="submit">Send</button>
			</form>
		</section>
	);
};

export default page;
