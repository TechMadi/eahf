import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { ScrollService } from "../../services/scroll.service";

@Component({
	selector: "app-scroll-to-top",
	standalone: true,
	template: `
		@if(showScrollButton){<button
			(click)="scrollToTop()"
			class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-4 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 opacity-100 animate-fade-in"
			aria-label="Scroll to top"
		>
			<svg
				class="w-5 h-5 md:w-6 md:h-6"
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

			/* Ensure button is visible on mobile */
			@media (max-width: 768px) {
				button {
					bottom: 1.5rem !important;
					right: 1.5rem !important;
					z-index: 9999 !important;
					/* Ensure button is always visible on mobile */
					opacity: 1 !important;
					/* Add a subtle shadow for better visibility */
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
					/* Make button slightly larger on mobile for better touch targets */
					padding: 0.875rem !important;
				}
			}

			/* Additional mobile optimizations */
			@media (max-width: 480px) {
				button {
					bottom: 1rem !important;
					right: 1rem !important;
					padding: 0.75rem !important;
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

	@HostListener("window:resize")
	onWindowResize(): void {
		this.checkScrollPosition();
	}

	private checkScrollPosition(): void {
		// Show button sooner on mobile devices
		const isMobile = window.innerWidth <= 768;
		const threshold = isMobile ? 150 : 300;
		this.showScrollButton = window.pageYOffset > threshold;
	}

	scrollToTop(): void {
		this.scrollService.scrollToTop();
	}
}
