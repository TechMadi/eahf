import { Component } from "@angular/core";

import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";
import {
	Gradient,
	Container,
} from "../../../../../shared/components/container/container";

import { NgIcon, provideIcons } from "@ng-icons/core";

import {
	heroArrowUpRight,
	heroClock,
	heroDevicePhoneMobile,
	heroEnvelope,
	heroMap,
	heroPhone,
} from "@ng-icons/heroicons/outline";
import {
	svglAffinityPublisher,
	svglJetbrainsSpace,
	svglGithubLight,
} from "@ng-icons/svgl";
import { Mini_Contact_Details } from "../../../../../shared/models/contact.const";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";
@Component({
	selector: "app-header",
	imports: [Navbar, Gradient, Container, NgIcon, SectionHeader],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
	viewProviders: [
		provideIcons({
			svglAffinityPublisher,
			svglJetbrainsSpace,
			svglGithubLight,
			heroArrowUpRight,
			heroMap,
			heroDevicePhoneMobile,
			heroPhone,
			heroEnvelope,
			heroClock,
		}),
	],
})
export class Header {
	insuranceList: {
		icon: string;
		link: string;
	}[] = [
		{
			icon: "svglAffinityPublisher",
			link: "",
		},
		{
			icon: "svglJetbrainsSpace",
			link: "",
		},
		{
			icon: "svglGithubLight",
			link: "",
		},
	];

	contactDetails = Mini_Contact_Details;
}
