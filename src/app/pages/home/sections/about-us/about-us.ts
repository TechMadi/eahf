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
			reason: "Peaceful Residential Setting",
			photoUrl: "/assets/images/reasons/peaceful-home.jpg",
		},
		{
			reason: "Home-cooked meals made with love",
			photoUrl: "/assets/images/reasons/home-cooked-meals.jpg",
		},
		{
			reason: "Caring, experienced team on site 24/7",
			photoUrl: "/assets/images/reasons/staff-care.jpg",
		},
		{
			reason: "Personalized care plans",
			photoUrl: "/assets/images/reasons/personalized-care.jpg",
		},
		{
			reason: "Warm and clean interiors",
			photoUrl: "/assets/images/reasons/interior.jpg",
		},
		{
			reason: "Affordable rates with premium care",
			photoUrl: "/assets/images/reasons/affordable-care.jpg",
		},
	];
}
