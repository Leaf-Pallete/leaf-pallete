import RadioAnatomy from "@/components/components-module/radio/radio-anatomy";
import RadioBestPractices from "@/components/components-module/radio/radio-best-practices";
import RadioHero from "@/components/components-module/radio/radio-hero";
import RadioUseCases from "@/components/components-module/radio/radio-use-cases";

const Radio = () => {
	return (
		<div className="flex flex-col mx-auto gap-6">
			<RadioHero />
			<RadioUseCases />
			<RadioAnatomy />
			<RadioBestPractices />
		</div>
	);
};

export default Radio;
