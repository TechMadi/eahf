declare global {
	interface Window {
		HSStaticMethods: {
			autoInit: () => void;
		};
	}
}

import { Component, inject, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterOutlet, Event } from "@angular/router";
import { Navbar } from "../shared/components/layout/navbar/navbar";
import { Footer } from "../shared/components/layout/footer/footer";
import * as AOS from "aos";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Navbar, Footer],
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

		AOS.init();
	}
}
