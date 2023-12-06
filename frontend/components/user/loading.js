import Skeleton from "@mui/material/Skeleton";

export default function HeroSerieLoader() {
	return (
		<div className="xl:col-span-9 lg:col-span-8 md:col-span-7 rounded-lg lg:h-96 md:h-72 h-64">
			<div className="flex flex-col-reverse md:grid md:grid-cols-12 lg:gap-16 gap-8 h-full">
				<div className="flex flex-col lg:col-span-4 md:col-span-5">
					<Skeleton
						animation="wave"
						variant="text"
						sx={{
							fontSize: "2rem",
							bgcolor: "rgb(38 38 38)",
							marginBottom: "4px",
						}}
					/>
					<Skeleton
						animation="wave"
						variant="rounded"
						height={120}
						sx={{ bgcolor: "rgb(38 38 38)" }}
						className="pb-2 mb-4 "
					/>
					<Skeleton
						animation="wave"
						variant="text"
						sx={{
							fontSize: "1.5rem",
							bgcolor: "rgb(38 38 38)",
						}}
					/>
				</div>
				<div className="flex flex-col lg:col-span-8 md:col-span-7">
					<Skeleton
						animation="wave"
						variant="rounded"
						sx={{ bgcolor: "rgb(38 38 38)", height: "100%" }}
					/>
				</div>
			</div>
		</div>
	);
}
