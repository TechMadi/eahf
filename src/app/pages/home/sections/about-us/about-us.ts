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
	}[] = [
		{
			icon: "simpleHearth",
			link: "",
		},
		{
			icon: "simpleUnitednations",
			link: "",
		},
		{
			icon: "simpleHedera",
			link: "",
		},

		{
			icon: "simpleWorldhealthorganization",
			link: "",
		},
	];
}
