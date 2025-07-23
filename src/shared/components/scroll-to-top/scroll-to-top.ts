import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { ScrollService } from "../../services/scroll.service";

@Component({
	selector: "app-scroll-to-top",
	template: `
		@if(showScrollButton){<button
			(click)="scrollToTop()"
			class="fixed bottom-8 right-8 z-50 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 opacity-0 animate-fade-in"
			aria-label="Scroll to top"
		>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M5 10l7-7m0 0l7 7m-7-7v18"
				/>
			</svg></button
		>}
	`,
	styles: [
		`
			.animate-fade-in {
				animation: fadeIn 0.3s ease-in-out forwards;
			}

			@keyframes fadeIn {
				from {
					opacity: 0;
					transform: translateY(10px);
				}
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
		`,
	],
})
export class ScrollToTopComponent implements OnInit, OnDestroy {
	showScrollButton = false;

	constructor(private scrollService: ScrollService) {}

	ngOnInit(): void {
		this.checkScrollPosition();
	}

	ngOnDestroy(): void {
		// Clean up if needed
	}

	@HostListener("window:scroll")
	onWindowScroll(): void {
		this.checkScrollPosition();
	}

	private checkScrollPosition(): void {
		this.showScrollButton = window.pageYOffset > 300;
	}

	scrollToTop(): void {
		this.scrollService.scrollToTop();
	}
}
