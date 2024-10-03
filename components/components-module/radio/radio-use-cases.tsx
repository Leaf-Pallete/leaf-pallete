import type { RadioUseCase } from "@/types";
import React from "react";

const useCases: RadioUseCase[] = [
	{
		id: 1,
		text: "Surveys and Questionnaires",
		description: "To select one answer among multiple options.",
	},
	{
		id: 2,
		text: "Registration Forms",
		description: "Choosing gender, marital status, account type, etc.",
	},
	{
		id: 3,
		text: "Preference Settings",
		description:
			"Selecting notification preferences, theme (light/dark), language, etc.",
	},
	{
		id: 4,
		text: "Search Filters",
		description:
			"On e-commerce websites or search systems, to choose a single criterion, such as price range, product category, etc.",
	},
	{
		id: 5,
		text: "Payment Processes",
		description:
			"Selecting a payment method (credit card, PayPal, bank transfer, etc.).",
	},
	{
		id: 6,
		text: "Poll Systems",
		description: "To vote on a single option among many available.",
	},
	{
		id: 7,
		text: "Reservation Systems",
		description:
			"Choosing seat type (window/aisle), room type (single/double), etc.",
	},
	{
		id: 8,
		text: "Software Settings",
		description:
			"To choose between different modes or functionalities, such as 'Basic Mode' vs. 'Advanced Mode.'",
	},
	{
		id: 9,
		text: "Feedback Forms",
		description:
			"Selecting a satisfaction level, recommendation, or approval (e.g., 'Yes', 'No').",
	},
];

const RadioUseCases = () => {
	return (
		<div className="flex flex-col items-start sm:items-center lg:items-start text-start sm:text-center lg:text-start gap-5">
			<h2 className="text-2xl font-semibold ">Use Cases</h2>
			<p className="text-xl w-full text-foreground lg:mx-0">
				Radio buttons are commonly used in various contexts, especially in user
				interfaces (UI) and digital forms. They are used when the user needs to
				select a single option from several available. Here are some examples of
				where radio buttons are frequently used:
			</p>
			<ol className="flex flex-col gap-6 list-decimal list-inside sm:flex-row sm:flex-wrap sm:gap-4 lg:gap-6 justify-center items-center">
				{useCases.map((useCase) => (
					<li key={useCase.id} className="flex items-start lg:w-full">
						<div className="text-xl ml-2">
							<span className="font-semibold">
								{useCase.id} - {useCase.text}:
							</span>{" "}
							<span>{useCase.description}</span>
						</div>
					</li>
				))}
			</ol>
			<p className="text-xl w-full text-foreground lg:mx-0">
				These are some common examples, but radio buttons can be used in any
				situation where it's necessary to ensure that only one option is
				selected from a group.
			</p>
		</div>
	);
};

export default RadioUseCases;
