import { Component } from "@angular/core";
import { Container } from "../../../../../shared/components/container/container";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";

@Component({
	selector: "app-services",
	imports: [Container, SectionHeader],
	templateUrl: "./services.html",
	styleUrl: "./services.scss",
})
export class Services {}
