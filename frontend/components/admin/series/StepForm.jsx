"use client";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import SeriesForm from "./SeriesForm";

const steps = ["Dodaj szczegóły serii", "Dodaj obsadę", "Dodaj odcinki"];

const StepForm = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [completed, setCompleted] = useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};
	return (
		<div className="w-full mt-8">
			<Stepper nonLinear activeStep={activeStep}>
				{steps.map((label, index) => (
					<Step key={label} completed={completed[index]}>
						<StepButton
							color="inherit"
							onClick={handleStep(index)}
							sx={{ circle: { color: "#404040" } }}
						>
							{label}
						</StepButton>
					</Step>
				))}
			</Stepper>
			<div>
				{allStepsCompleted() ? (
					<React.Fragment>
						<p className="mt-2 mb-1">Udało się dodać serię</p>
						<div className="flex pt-2">
							<div className="flex flex-auto" />
							<Button onClick={handleReset}>
								Dodaj kolejną serię
							</Button>
						</div>
					</React.Fragment>
				) : (
					<React.Fragment>
						<p className="py-4 pl-2">Krok {activeStep + 1}</p>
						<SeriesForm part={activeStep} />
						<div className="flex pt-2">
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Powrót
							</Button>
							<div className="flex flex-auto" />
							<Button
								onClick={handleNext}
								sx={{ mr: 1, color: "#ff9900" }}
							>
								Przejdź dalej
							</Button>
							{activeStep !== steps.length &&
								(completed[activeStep] ? (
									<p className="caption-top inline-block text-base mt-1">
										Ukończono krok {activeStep + 1}.
									</p>
								) : (
									<Button
										onClick={handleComplete}
										sx={{ color: "#ff9900" }}
									>
										{completedSteps() === totalSteps() - 1
											? "Dodaj serię"
											: "Ukończ krok"}
									</Button>
								))}
						</div>
					</React.Fragment>
				)}
			</div>
		</div>
	);
};

export default StepForm;
