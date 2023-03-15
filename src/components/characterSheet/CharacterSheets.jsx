import { useState, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

const apiUrl = "http://localhost:4000";

export default function CharacterSheets() {
	const [characterSheets, setCharacterSheets] = useState([]);

	useEffect(() => {
		fetchAllCS();
	}, []);

	const fetchAllCS = async () => {
		const res = await fetch(`${apiUrl}/characterSheet`);
		const data = await res.json();
		setCharacterSheets(data);
		console.log(characterSheets);
	};
	return (
		<>
			<Header />
			<div className="container">
				{/* TODO: Generate a card for each character sheet */}
			</div>
			<Footer />
		</>
	);
}
