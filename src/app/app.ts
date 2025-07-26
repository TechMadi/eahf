declare global {
	interface Window {
		HSStaticMethods: {
			autoInit: () => void;
		};
	}
}

import { AfterViewInit, Component, inject, OnInit } from "@angular/core";
import {
	NavigationEnd,
	Router,
	RouterOutlet,
	Event,
	ActivatedRoute,
} from "@angular/router";

import { Footer } from "../shared/components/layout/footer/footer";
import * as AOS from "aos";
import { Loader } from "../shared/components/loader/loader";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Footer, Loader],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements OnInit {
	protected title = "eaf-website";
	showLoader: boolean = true;
	router = inject(Router);
	route = inject(ActivatedRoute);

	ngOnInit() {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				setTimeout(() => window.HSStaticMethods.autoInit(), 100);
			}
		});

		AOS.init();
	}
}
