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
import { IReason, ReasonsData } from "../../../../../shared/models/data.const";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "app-about-us",
	imports: [Container, NgIcon, SectionHeader, NgOptimizedImage],
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

	reasonsToChooseUs: IReason[] = ReasonsData;
}
