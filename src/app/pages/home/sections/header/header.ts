import { Component } from "@angular/core";

import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";
import {
	Gradient,
	Container,
} from "../../../../../shared/components/container/container";

import { NgIcon, provideIcons } from "@ng-icons/core";

import {
	svglAffinityPublisher,
	svglJetbrainsSpace,
	svglGithubLight,
} from "@ng-icons/svgl";
@Component({
	selector: "app-header",
	imports: [Navbar, Gradient, Container, NgIcon],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
	viewProviders: [
		provideIcons({
			svglAffinityPublisher,
			svglJetbrainsSpace,
			svglGithubLight,
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
}
