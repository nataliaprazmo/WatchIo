import React from "react";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";
import OfferSteps from "./OfferSteps";

const OfferService = ({ id, title, description, image, tutorial }) => {
	return (
		<div
			id={id}
			className="px-13 pt-16 flex lg:flex-row flex-col justify-between items-center gap-16"
		>
			<div className="flex flex-col">
				<h1 className="text-2xl font-semibold pb-2 text-primary-orange uppercase flex items-center gap-2">
					<MdArrowForward size="28" fill="#ff9900" />
					{title}
				</h1>
				<p className="pb-2 font-medium ">{description}</p>
				<div className="flex xl:flex-row flex-col gap-8 xl:items-center items-start justify-between ">
					<div>
						{tutorial.map((t, id) => (
							<div key={id}>
								<h1 className="pb-1 font-semibold pt-2">
									{t.name}
								</h1>
								<OfferSteps steps={t.content} />
							</div>
						))}
					</div>
				</div>
			</div>
			<Image
				src={image}
				height={150}
				width={450}
				style={{ objectFit: "contain" }}
				alt="service"
			/>
		</div>
	);
};

export default OfferService;
