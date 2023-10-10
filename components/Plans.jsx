import React from "react";
import Plan from "./Plan";

const Plans = () => {
	return (
		<div className="hero__plans">
			<Plan
				type="Plan podstawowy"
				price="6,99zł"
				description={[
					"Pokoje do 5 osób",
					"Subskrybcja 5 osobowa",
					"3 podkonta",
					"Udostępnianie playlist",
				]}
				button="outlined"
				main={false}
			/>
			<Plan
				type="Subskrypcja dzielona"
				price="0zł"
				description={[
					"Jeśli uzyskałeś kod od jednego z naszych subskrybentów, możesz dołączyć do planu!",
					"Wystarczy wpisać otrzymany kod przy rejestracji",
				]}
				button="filled"
				main={true}
			/>
			<Plan
				type="Plan premium"
				price="8,99zł"
				description={[
					"Pokoje do 10 osób",
					"Subskrybcja 6 osobowa",
					"4 podkonta",
					"Udostępnianie playlist",
				]}
				button="outlined"
				main={false}
			/>
		</div>
	);
};

export default Plans;
