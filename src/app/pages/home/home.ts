import { Component } from "@angular/core";
import { Container } from "../../../shared/components/container/container";
import { SectionHeader } from "../../../shared/components/section-header/section-header";
import { Header } from "./sections/header/header";

@Component({
	selector: "app-home",
	imports: [Container, SectionHeader, Header],
	templateUrl: "./home.html",
	styleUrl: "./home.scss",
})
export class Home {}
