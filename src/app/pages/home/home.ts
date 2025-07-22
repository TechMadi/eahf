import { Component } from "@angular/core";
import {
	Container,
	Gradient,
} from "../../../shared/components/container/container";
import { SectionHeader } from "../../../shared/components/section-header/section-header";
import { Header } from "./sections/header/header";
import { AboutUs } from "./sections/about-us/about-us";
import { Services } from "./sections/services/services";

@Component({
	selector: "app-home",
	imports: [Header, AboutUs, Services],
	templateUrl: "./home.html",
	styleUrl: "./home.scss",
})
export class Home {}
