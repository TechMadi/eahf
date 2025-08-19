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
import { AosService } from "../shared/services/aos.service";
import { Loader } from "../shared/components/loader/loader";
import { ScrollToTopComponent } from "../shared/components/scroll-to-top/scroll-to-top";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, Footer, Loader, ScrollToTopComponent],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements OnInit {
	protected title = "eaf-website";
	showLoader: boolean = true;
	router = inject(Router);
	route = inject(ActivatedRoute);
	aosService = inject(AosService);

	ngOnInit() {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				setTimeout(() => {
					window.HSStaticMethods.autoInit();
					// Refresh AOS after route changes
					this.aosService.refresh();
				}, 100);
			}
		});
	}
}
