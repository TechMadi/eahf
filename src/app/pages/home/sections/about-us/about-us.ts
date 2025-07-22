import { Component } from "@angular/core";
import { Container } from "../../../../../shared/components/container/container";
import { NgIcon, provideIcons } from "@ng-icons/core";

import {
	simpleHearth,
	simpleHedera,
	simpleUnitednations,
	simpleWorldhealthorganization,
} from "@ng-icons/simple-icons";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";

@Component({
	selector: "app-about-us",
	imports: [Container, NgIcon, SectionHeader],
	templateUrl: "./about-us.html",
	styleUrl: "./about-us.scss",
	viewProviders: [
		provideIcons({
			simpleHearth,
			simpleHedera,
			simpleUnitednations,
			simpleWorldhealthorganization,
		}),
	],
})
export class AboutUs {
	clientLists: {
		icon: string;
		link: string;
		label: string;
	}[] = [
		{
			icon: "simpleHearth",
			link: "",
			label: "MediCare",
		},
		{
			icon: "simpleUnitednations",
			link: "",
			label: "United Nations",
		},
		{
			icon: "simpleHedera",
			link: "",
			label: "Hedera",
		},

		{
			icon: "simpleWorldhealthorganization",
			link: "",
			label: "WHO",
		},
	];

	reasonsToChooseUs: {
		reason: string;
		photoUrl: string;
	}[] = [
		{
			reason: "Peaceful Residential Care Setting",
			photoUrl:
				"https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg",
		},
		{
			reason: "Home-cooked meals made with love",
			photoUrl:
				"https://images.pexels.com/photos/3677150/pexels-photo-3677150.jpeg",
		},
		{
			reason: "Caring, experienced team on site 24/7",
			photoUrl:
				"https://images.pexels.com/photos/2026764/pexels-photo-2026764.jpeg",
		},
		{
			reason: "Personalized care plans",
			photoUrl:
				"https://images.pexels.com/photos/6975193/pexels-photo-6975193.jpeg",
		},
		{
			reason: "Warm and clean interiors",
			photoUrl:
				"https://images.pexels.com/photos/18459206/pexels-photo-18459206.jpeg",
		},
		{
			reason: "Affordable rates with premium care",
			photoUrl:
				"https://images.pexels.com/photos/33116703/pexels-photo-33116703.jpeg",
		},
	];
}
