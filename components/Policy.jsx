import React from "react";
import Nav from "./Nav";
import CookiesPolicy from "./CookiesPolicy";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfUse from "./TermsOfUse";
import Footer from "./Footer";

const Policy = () => {
	return (
		<div>
			<Nav />
			<div className="px-[50px] py-18">
				<PrivacyPolicy />
				<TermsOfUse />
				<CookiesPolicy />
			</div>
			<Footer />
		</div>
	);
};

export default Policy;
