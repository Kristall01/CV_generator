import Contact from "Contact";
import { useState } from "react";
import "./style.css";

const { default: Section } = require("Section");

const linkGenerated = `<b><u><a href="https://www.dudasdominik.hu/cv">www.dudasdominik.hu/cv</a></u></b>`;

const langpack = {
	"HU": {
		"name": "Dudás Dominik",
		"title": "Junior Szoftverfejlesztő",
		"edu": "Oktatás",
		"exp": "Tapasztalatok",
		"projects": <div>Nagyobb projektjeim (részletekért keresd fel a <a className="ul" href="https://www.dudasdominik.hu/projects">weboldalam)</a></div>,
		"techs": "Legtöbbet használt technológiák",
		"generator": (date) => `Ez a dokumentum ${date} napon lett generálva. A legfrissebb verzióért látogass el a weboldalamra: ${linkGenerated}`,
		"gimi": "Szakgimnázium",
		"english": "Angol",
		"grade": "98%-os emelt szakmai érettségi",
		"auto": "Autodidakta tanulás (2013 óta)",
		"missing": "Hiányzik innen valami? Semmi gond! Adj egy kis időt és gyorsan beletanulok.",
		"expdata": [
			"Full stack Web fejlesztés (react frontend, java / nodeJS backend)",
			"Java fejlesztés(8+ év)",
			"játék szerverek üzemeltetése, futtatása, fejlesztése (500+ online, 100.000+ regisztrált játékos)",
			"DevOps: git(github/gitlab), ci/cd",
			"Linux szerver kezelés (raspberry PI, ubuntu/debian VPS)",
			"weboldal & alkalmazás hoszting",
		],
		"projectList": [
			<li>Sett: Sett kártyajáték webes beadandó, online multiplayerrel móddal tovább fejlesztve"</li>,
			<li>Lagrange interpolator: egyszerű Lagrange interpolációs vizuális kalkulátor web alapon</li>,
			<li>BaróBőr fullstack webshop (fejlesztés alatt)</li>,
			<li>szakdolgozat: web alapú MMORPG játék kifejlesztése nulláról, game engine használata nélkül</li>,
			<li>vidámpark tycoon: egyetemi vidámpark tycoon játék szimulátor implementációja agilis fejlesztési csoportban</li>,
		]
	},
	"EN": {
		"name": "Dominik Dudás",
		"title": "Junior Software Developer",
		"edu": "Education",
		"exp": "Experiences",
		"projects": <div>Bigger projects (more description at my <a className="ul" href="https://www.dudasdominik.hu/projects">website</a>)</div>,
		"techs": "Most used technologies",
		"generator": (date) => `This document was generated on ${date} For the latest version check out my website: ${linkGenerated} `,
		"gimi": "High school",
		"english": "English",
		"grade":"98% graded coding final exam",
		"auto": "Self learning (since 2013)",
		"missing": "Missing something from above? Don't worry! Give me some time and I'll pick it up quickly",
		"expdata": [
			"Full stack Web development (react frontend, java / nodeJS backend)",
			"Java development(8+ years)",
			"Running, hosting, developing Game servers (500+ online, 100.000+ registered users)",
			"DevOps: git/(github, gitlab), ci/cd",
			"Linux server management (raspberry PI, ubuntu/debian VPS)",
			"Website & app hosting"
		],
		"projectList": [
			<li>Sett: Sett card game web based implementation, extended with online multiplayer mode</li>,
			<li>Lagrange interpolator: simple Lagrange interpolation visual calculator on web</li>,
			<li>BaróBőr fullstack webshop (under development)</li>,
			<li>final exam: web based MMORPG game development from scratch, without using a game engine</li>,
			<li>amusement park tycoon: university amusement park tycoon simulator game implementation in an agile development group</li>,
		]
	},
}

const Cv = ({langCode}) => {

	let lang = langpack[langCode] || langpack["HU"];

	return (
		<div className="a4wrap">
			<div className="a4">
				<i id="generate">
						<span dangerouslySetInnerHTML={{__html: lang.generator(new Date().toLocaleDateString())}}></span>
					</i>
				<div className="align">
					<div className="header">
						<div className="photo-block">
							<img className="photo" src="photo.jpg" alt="" />
						</div>
						<div className="header-remain">
							<div className="signature">
								<div className="name">{lang.name}</div>
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
							<div>{lang.english} C1</div>
							<div>{lang.auto}</div>
						</Section>
						<Section title={lang.exp}>
							<ul>
								{lang.expdata.map((a,b) => <li key={b}>{a}</li>)}
							</ul>
						</Section>
						<Section title={lang.projects}>
							<ul>
								{lang.projectList.map((a,b) => <li key={b}>{a}</li>)}
							</ul>
						</Section>
						<Section title={lang.techs}>
							<ul>
								<li>Web: html/css/js, JSON, rest API, testing tools </li>
								<li>Java: java SE, gradle, jetty, javalin, bukkit, intelliJ, eclipse, JDBC</li>
								<li>Javascript: vanilla, typescript, nodeJS, express, typeorm, sequelize, react</li>
								<li>Version control/cicd: git, gitlab, gitlab CI, github, github actions, docker</li>
								<li>Linux/hosting: ubuntu server, apache, nginx, docker</li>
								<li>sql: mysql, phpmyadmin, postgres, sqlite, orm frameworks</li>
							</ul>
						</Section>
						<div>{lang.missing}</div>
					</div>
				</div>
			</div>
		</div>
	)

}

export default Cv;