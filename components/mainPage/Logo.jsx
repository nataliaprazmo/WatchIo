import React from "react";
import Image from "next/image";

const Logo = ({ classes }) => {
	return (
		<div className={classes}>
			<Image
				src="/images/logo.svg"
				height={48}
				width={376.5}
				style={{ objectFit: "contain" }}
				alt="logo"
			/>
		</div>
	);
};

export default Logo;
