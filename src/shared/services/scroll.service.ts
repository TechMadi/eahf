import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ScrollService {
	/**
	 * Smoothly scroll to an element by ID
	 */
	scrollToElement(elementId: string, offset: number = 0): void {
		const cleanId = elementId.startsWith("#")
			? elementId.substring(1)
			: elementId;

		const element = document.getElementById(cleanId);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;

			this.smoothScrollTo(offsetPosition, 300);
		} else {
			const allElements = document.querySelectorAll("[id]");
		}
	}

	/**
	 * Custom smooth scroll implementation with configurable duration
	 */
	private smoothScrollTo(targetPosition: number, duration: number = 300): void {
		const startPosition = window.pageYOffset;
		const distance = targetPosition - startPosition;
		let startTime: number | null = null;

		const animation = (currentTime: number) => {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = this.easeInOutQuad(
				timeElapsed,
				startPosition,
				distance,
				duration,
			);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};

		requestAnimationFrame(animation);
	}

	/**
	 * Easing function for smooth scroll animation
	 */
	private easeInOutQuad(t: number, b: number, c: number, d: number): number {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	/**
	 * Smoothly scroll to a fragment
	 */
	scrollToFragment(fragment: string, offset: number = 0): void {
		this.scrollToElement(fragment, offset);
	}

	/**
	 * Scroll to top of the page
	 */
	scrollToTop(): void {
		this.smoothScrollTo(0, 300); // 300ms for faster scroll to top
	}

	/**
	 * Check if an element is in viewport
	 */
	isElementInViewport(elementId: string): boolean {
		// Remove # if present
		const cleanId = elementId.startsWith("#")
			? elementId.substring(1)
			: elementId;
		const element = document.getElementById(cleanId);
		if (!element) return false;

		const rect = element.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
}
