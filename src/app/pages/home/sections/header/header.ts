import { Component } from "@angular/core";

import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";
import {
	Gradient,
	Container,
} from "../../../../../shared/components/container/container";

import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroArrowUpRight } from "@ng-icons/heroicons/outline";
@Component({
	selector: "app-header",
	imports: [Navbar, Gradient, Container, NgIcon],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
	viewProviders: [provideIcons({ heroArrowUpRight })],
})
export class Header {}
