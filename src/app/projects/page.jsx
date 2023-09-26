"use client";
import React from "react";

const projects = [
	{
		id: 4,
		title: "Scend",
		desc: "Fintech application",
		github_link: "https://github.com/ChibuzoEkwue/scend",
		live_link: "https://scend-delta.vercel.app",
		tags: ["React"],
		slug: "flair",
	},
	{
		id: 1,
		title: "Flair",
		desc: "A Single page site for a futuristic fashion agency",
		github_link: "https://github.com/ChibuzoEkwue/Flair",
		live_link: "https://flair-pearl.vercel.app",
		tags: ["React"],
		slug: "flair",
	},

	{
		id: 2,
		title: "Chalk Board",
		desc: "A simple real time chalkboard built with html canvas and socket io",
		github_link: "https://github.com/ChibuzoEkwue/chalkboard",
		live_link: null,
		tags: ["React"],
		slug: "chalk-board",
	},

	{
		id: 3,
		title: "Firebase auth",
		desc: "A firebase auth application",
		github_link: "https://github.com/ChibuzoEkwue/HNGx-Stage-3",
		live_link: "https://hn-gx-stage-3.vercel.app",
		tags: ["Rectt", "firebase"],
		slug: "firebase-auth",
	},
	{
		id: 4,
		title: "Movie application",
		desc: "A simple movie application",
		github_link: "https://github.com/ChibuzoEkwue/HNGx-stage-2-frontend",
		live_link: "https://hn-gx-stage-2-frontend.vercel.app/",
		tags: ["Rectt"],
		slug: "movie-application",
	},
];
const page = () => {
	return (
		<section>
			<div className="container">
				<div className="projects">
					{projects.map((project) => (
						<div className="card" key={project.id}>
							<h1>{project.title}</h1>
							<h3>{project.desc}</h3>
							<a href={project.github_link} className="github">
								Git Hub
							</a>
							{project.live_link ? (
								<a href={project.live_link} className="live">
									Go live
								</a>
							) : (
								<p>project is not been hosted</p>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default page;
