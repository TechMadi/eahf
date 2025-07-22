import { Component } from "@angular/core";
import {
	Container,
	Gradient,
} from "../../../shared/components/container/container";
import { SectionHeader } from "../../../shared/components/section-header/section-header";
import { Header } from "./sections/header/header";
import { AboutUs } from "./sections/about-us/about-us";

@Component({
	selector: "app-home",
	imports: [Container, SectionHeader, Header, AboutUs, Gradient],
	templateUrl: "./home.html",
	styleUrl: "./home.scss",
})
export class Home {}
