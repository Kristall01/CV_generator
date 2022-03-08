import Contact from "Contact";
import { useState } from "react";
import "./style.css";

const { default: Section } = require("Section");

const linkGenerated = `<b><u><a href="https://www.dudasdominik.hu">www.dudasdominik.hu/cv</a></u></b>`;

const langpack = {
	"HU": {
		"title": "Junior Szoftverfejlesztő",
		"edu": "Oktatás",
		"exp": "Tapasztalatok",
		"projects": "Nagyobb projektjeim (leírásért és forrásért kered fel a github oldalam)",
		"techs": "Technológiák",
		"generator": (date) => `Ez a dokumentum ${date} napon lett generálva. A legfrissebb verzióért látogass el erre az oldalra: ${linkGenerated}`,
		"gimi": "Szakgimnázium",
		"english": "Angol",
		"grade": "98%-os emelt szakmai érettségi",
		"auto": "Autodidakta tanulás (2013 óta)",
		"expdata": [
			"Full stack Web fejlesztés",
			"Java fejlesztés(8+ év)",
			"játék szerverek üzemeltetése, futtatása, fejlesztése (500+ online, 100.000+ regisztrált játékos)",
			"DevOps: git(github/gitlab), ci/cd",
			"Linux szerver kezelés (raspberry PI, ubuntu/debian VPS)",
			"weboldal & alkalmazás hoszting"
		]
	},
	"EN": {
		"title": "Junior Software Developer",
		"edu": "Education",
		"exp": "Experiences",
		"projects": "Bigger projects (see source and description at my github)",
		"techs": "Technologies I use and know",
		"generator": (date) => `This document was generated from ${linkGenerated} at ${date}`,
		"gimi": "Highschool",
		"english": "English",
		"grade":"98% graded coding final exam",
		"auto": "Self learning (since 2013)",
		"expdata": [
			"Full stack Web development",
			"Java development(8+ év)",
			"Running, hosting, developing Game servers (500+ online, 100.000+ registered users)",
			"DevOps: git/(github, gitlab), ci/cd",
			"Linux server management (raspberry PI, ubuntu/debian VPS)",
			"Website & app hosting"
		]
	},
}

const Cv = ({langCode}) => {

	let lang = langpack[langCode] || langpack["HU"];

	return (
		<div className="a4wrap">
			<div className="a4">
				<div className="align">
					<div className="header">
						<div className="photo-block">
							<img className="photo" src="photo.svg" alt="" />
						</div>
						<div className="header-remain">
							<div className="signature">
								<div className="name">Dudás Dominik</div>
								<div className="role">{lang.title}</div>
							</div>
							<div className="contact flextable">
								<div>
									<Contact icon="fa-solid fa-envelope" href="mailto:dudas.dominik@protonmail.com">
										dudas.dominik@protonmail.com
									</Contact>
									<Contact icon="fa-solid fa-phone" href="tel:+36-20/431-2555">
										+36-20/431-2555
									</Contact>
								</div>
								<div>
									<Contact icon="fa-brands fa-github" href="https://github.com/Kristall01">
										github.com/Kristall01
									</Contact>
									<Contact icon="fa-solid fa-earth-americas" href="https://www.dudasdominik.hu">
										www.dudasdominik.hu
									</Contact>
								</div>
							</div>
						</div>
					</div>
					<div className="main">
						<Section title={lang.edu}>
							<div>Neumann János {lang.gimi} Eger (2015-2019, {lang.grade})</div>
							<div>ELTE IK BSc. (2019-2022)</div> 
							<div>English C1</div>
							<div>{lang.auto}</div>
						</Section>
						<Section title={lang.exp}>
							{lang.expdata.map((a,b) => <div key={b}>{a}</div>)}
						</Section>
						<Section title="lang.projects">
							<div>Sett game</div>
							<div>Lagrange interpolator</div> 
							<div>Baróbőr webshop</div> 
							<div>MMorpg játék</div> 
						</Section>
						<Section title={lang.techs}>
							<div>Web: html/css/js, API testing tools </div>
							<div>Java: java SE, gradle, jetty, javalin, bukkit, intelliJ, eclipse, JDBC </div>
							<div>Javascript: browser, typescript, nodeJS, express, typeorm, sequelize, react </div>
							<div>Version control/cicd: git, gitlab, gitlab CI, github, github actions, docker, </div>
							<div>Linux/hosting: ubuntu server, apache, nginx, docker </div>
							<div>sql: mysql, phpmyadmin, postgres, sqlite, orm frameworks </div>
							<div>Other programming languages I used in university: python, php, c#, c, c++ </div>
							<div>Missing something? Give me some time and I’ll learn</div>
						</Section>
					</div>
					<div className="footer">
						<i id="generate">
							<span dangerouslySetInnerHTML={{__html: lang.generator(new Date().toLocaleDateString())}}></span>
						</i>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Cv;