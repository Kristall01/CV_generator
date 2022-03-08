import Cv from "CV";
import { useState } from "react";

const printLabels = {
	"EN": "Print / generate PDF",
	"HU": "Nyomtatás / PDF generálás"
}

const App = ({}) => {

	let [langCode, setLangCode] = useState("HU");

	

	return (
		<>
			<div className="preHeader">
				<div className="preheader">
					<div className="btn" onClick={window.print}>
					<i className="fa-solid fa-print" /><span>{printLabels[langCode]}</span>
					</div>
					<div className="btn" onClick={() => setLangCode("HU")}>🇭🇺 Magyar változat</div>
					<div className="btn" onClick={() => setLangCode("EN")}>🇬🇧 English version</div>
				</div>
			</div>
			<Cv langCode={langCode}/>
		</>
	)

};

export default App;