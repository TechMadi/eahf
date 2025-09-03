import { Component } from "@angular/core";
import { Container } from "../../../../../shared/components/container/container";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";
import { NgIcon, provideIcons } from "@ng-icons/core";
import {
	heroHome,
	heroClock,
	heroPuzzlePiece,
	heroHeart,
} from "@ng-icons/heroicons/outline";
import { NgClass } from "@angular/common";
import { ScrollService } from "../../../../../shared/services/scroll.service";

@Component({
	selector: "app-care-categories",
	standalone: true,
	imports: [Container, SectionHeader, NgIcon],
	templateUrl: "./care-categories.html",
	styleUrl: "./care-categories.scss",
	viewProviders: [
		provideIcons({
			heroHome,
			heroClock,
			heroPuzzlePiece,
			heroHeart,
		}),
	],
})
export class CareCategories {
	careCategories: {
		label: string;
		title: string;
		description: string;
		icon: string;
		ctaText: string;
		ctaLink: string;
	}[] = [
		{
			label: "2024 / Care Type",
			title: "Residential Living",
			description:
				"Comfortable, home-like environment with 24/7 care and support for daily activities.",
			icon: "heroHome",
			ctaText: "Learn More",
			ctaLink: "#residential-living",
		},
		{
			label: "2024 / Care Type",
			title: "Short-Term & Respite Care",
			description:
				"Temporary care solutions to give family caregivers a much-needed break.",
			icon: "heroClock",
			ctaText: "Learn More",
			ctaLink: "#respite-care",
		},
		{
			label: "2024 / Care Type",
			title: "Memory Care",
			description:
				"Specialized care for residents with Alzheimer's, dementia, and memory-related conditions.",
			icon: "heroPuzzlePiece",
			ctaText: "Learn More",
			ctaLink: "#memory-care",
		},
		{
			label: "2024 / Care Type",
			title: "Palliative Support",
			description:
				"Compassionate end-of-life care focusing on comfort, dignity, and quality of life.",
			icon: "heroHeart",
			ctaText: "Learn More",
			ctaLink: "#palliative-support",
		},
	];

	constructor(private scrollService: ScrollService) {}

	scrollToCategory(fragment: string): void {
		// Remove the # from the fragment if present
		const cleanFragment = fragment.startsWith("#")
			? fragment.substring(1)
			: fragment;
		this.scrollService.scrollToFragment(cleanFragment, 80);
	}
}
