import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { heroPhoto, heroBuildingOffice } from "@ng-icons/heroicons/outline";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterModule, NgIcon],
	templateUrl: "./footer.html",
	styleUrl: "./footer.scss",
	viewProviders: [
		provideIcons({
			heroPhoto,
			heroBuildingOffice,
		}),
	],
})
export class Footer {}
