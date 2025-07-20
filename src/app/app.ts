declare global {
	interface Window {
		HSStaticMethods: {
			autoInit: () => void;
		};
	}
}

import { Component, inject, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet, Event } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements OnInit {
	protected title = "eaf-website";
	router = inject(Router);

	ngOnInit() {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				setTimeout(() => window.HSStaticMethods.autoInit(), 100);
			}
		});
	}
}
