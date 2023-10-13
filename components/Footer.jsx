import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="bg-grey-300 px-[5%] py-18">
			<div className="grid grid-cols-5">
				<div className="xl:max-w-[220px] lg:max-w-[150px] max-w-[100px]">
					<Image
						src="/images/logo.svg"
						height={48}
						width={376.5}
						style={{ objectFit: "contain" }}
						alt="logo"
					/>
				</div>
				<div>
					<Link
						href="/"
						className="font-bold text-[16px] hover:text-primary-orange"
					>
						Strona główna
					</Link>
					<div className="flex flex-col">
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Rejestracja
						</Link>
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Logowanie
						</Link>
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							FAQ
						</Link>
					</div>
				</div>
				<div>
					<Link
						href="/"
						className="font-bold text-[16px] hover:text-primary-orange"
					>
						Oferta
					</Link>
					<div className="flex flex-col">
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Wspólne pokoje
						</Link>
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Dzielenie subskrypcją
						</Link>
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Udostępnianie playlist
						</Link>
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Filmy i seriale
						</Link>
					</div>
				</div>
				<div>
					<Link
						href="/"
						className="font-bold text-[16px] hover:text-primary-orange"
					>
						Subskrypcje
					</Link>
					<div className="flex flex-col">
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Plan podstawowy
						</Link>
						<Link
							href="/"
							className="font-regular text-[14px] hover:text-primary-orange"
						>
							Subskrypcja dzielona
						</Link>
					</div>
				</div>
				<div>
					<Link
						href="/"
						className="font-bold text-[16px] hover:text-primary-orange flex flex-col"
					>
						Kontakt
					</Link>
					<Link
						href="/"
						className="font-regular text-[14px] hover:text-primary-orange"
					>
						contact@watchio.com.pl
					</Link>
				</div>
			</div>
			<div className="grid grid-cols-5 mt-16">
				<p className="font-regular text-[12px]">
					&copy; 2023 Radłowski K. Prażmo N.
				</p>
				<Link
					href="/"
					className="font-semibold text-[12px] hover:text-primary-orange"
				>
					Pomoc
				</Link>
				<Link
					href="/"
					className="font-semibold text-[12px] hover:text-primary-orange"
				>
					Polityka prywatności
				</Link>
				<Link
					href="/"
					className="font-semibold text-[12px] hover:text-primary-orange"
				>
					Warunki korzystania
				</Link>
				<Link
					href="/"
					className="font-semibold text-[12px] hover:text-primary-orange"
				>
					Ciasteczka
				</Link>
			</div>
		</div>
	);
};

export default Footer;
