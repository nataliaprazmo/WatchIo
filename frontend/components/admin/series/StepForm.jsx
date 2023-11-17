"use client";
import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import AddForm from "./AddForm";

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
				? steps.findIndex((step, i) => !(i in completed))
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
					<AddForm
						activeStep={activeStep}
						handleBack={handleBack}
						steps={steps}
						handleComplete={handleComplete}
						totalSteps={totalSteps()}
					/>
				)}
			</div>
		</div>
	);
};

export default StepForm;
