import { Injectable } from "@angular/core";
import * as AOS from "aos";

export interface AOSAnimationConfig {
	animation: string;
	duration?: number;
	delay?: number;
	easing?:
		| "linear"
		| "ease"
		| "ease-in"
		| "ease-out"
		| "ease-in-out"
		| "ease-in-cubic"
		| "ease-out-cubic"
		| "ease-in-out-cubic";
	once?: boolean;
	mirror?: boolean;
	anchorPlacement?:
		| "top-bottom"
		| "center-bottom"
		| "bottom-bottom"
		| "top-center"
		| "center-center"
		| "bottom-center"
		| "top-top"
		| "center-top"
		| "bottom-top";
}
// ... existing code ...

export const AOS_ANIMATIONS = {
	// Fade
	FADE_UP: { animation: "fade-up", duration: 800 },
	FADE_DOWN: { animation: "fade-down", duration: 800 },
	FADE_LEFT: { animation: "fade-left", duration: 800 },
	FADE_RIGHT: { animation: "fade-right", duration: 800 },
	FADE_IN: { animation: "fade", duration: 600 },

	// Zoom
	ZOOM_IN: { animation: "zoom-in", duration: 600 },
	ZOOM_OUT: { animation: "zoom-out", duration: 600 },

	// Flip
	FLIP_LEFT: { animation: "flip-left", duration: 800 },
	FLIP_RIGHT: { animation: "flip-right", duration: 800 },
	FLIP_UP: { animation: "flip-up", duration: 800 },
	FLIP_DOWN: { animation: "flip-down", duration: 800 },

	// Slide
	SLIDE_UP: { animation: "slide-up", duration: 700 },
	SLIDE_DOWN: { animation: "slide-down", duration: 700 },
	SLIDE_LEFT: { animation: "slide-left", duration: 700 },
	SLIDE_RIGHT: { animation: "slide-right", duration: 700 },
} as const;

export type AnimationType = keyof typeof AOS_ANIMATIONS;

export const AOS_DURATIONS = {
	FAST: 400,
	NORMAL: 600,
	MEDIUM: 800,
	SLOW: 1000,
	VERY_SLOW: 1200,
} as const;

export const AOS_DELAYS = {
	NONE: 0,
	SHORT: 100,
	MEDIUM: 200,
	LONG: 300,
	EXTRA_LONG: 500,
} as const;

@Injectable({
	providedIn: "root",
})
export class AosService {
	private defaultConfig: Required<Omit<AOSAnimationConfig, "animation">> = {
		duration: AOS_DURATIONS.MEDIUM,
		delay: AOS_DELAYS.NONE,
		easing: "ease-out-cubic",
		once: true,
		mirror: false,
		anchorPlacement: "top-bottom",
	};

	private initialized = false;

	constructor() {
		this.init();
		this.handleResize();
	}

	/** Initialize AOS only once */
	private init(): void {
		if (this.initialized) return;
		this.initialized = true;

		AOS.init({
			...this.defaultConfig,
			// Disable AOS on small devices for better perf
			//disable: window.innerWidth < 768 ? "mobile" : false,
		});
	}

	/** Refresh AOS animations (useful after DOM changes) */
	refresh(): void {
		AOS.refresh();
	}

	/** Re-init AOS on window resize (throttled) */
	private handleResize(): void {
		let resizeTimer: any;
		window.addEventListener("resize", () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(() => this.refresh(), 300);
		});
	}

	/** Get attributes for use in Angular templates */
	getAnimationAttributes(
		animationType: AnimationType,
		overrides: Partial<AOSAnimationConfig> = {},
	): Record<string, string> {
		const base = AOS_ANIMATIONS[animationType];
		const config = { ...this.defaultConfig, ...base, ...overrides };

		const attrs: Record<string, string> = {
			"data-aos": config.animation,
			"data-aos-duration": config.duration.toString(),
			"data-aos-delay": config.delay.toString(),
			"data-aos-easing": config.easing,
			"data-aos-anchor-placement": config.anchorPlacement,
			"data-aos-once": String(config.once),
			"data-aos-mirror": String(config.mirror),
		};

		return attrs;
	}

	/** Generate staggered delays for lists/grids */
	getStaggeredAttributes(
		index: number,
		animationType: AnimationType,
		baseDelay: number = AOS_DELAYS.SHORT,
	): Record<string, string> {
		return this.getAnimationAttributes(animationType, {
			delay: baseDelay + index * AOS_DELAYS.SHORT,
		});
	}

	/** Common patterns for UI elements */
	static readonly PATTERNS = {
		HERO_TITLE: AOS_ANIMATIONS.FADE_UP,
		HERO_SUBTITLE: { ...AOS_ANIMATIONS.FADE_UP, delay: AOS_DELAYS.SHORT },
		HERO_BUTTON: { ...AOS_ANIMATIONS.FADE_UP, delay: AOS_DELAYS.MEDIUM },
		CARD: AOS_ANIMATIONS.FADE_UP,
		CARD_STAGGERED: (i: number) => ({
			...AOS_ANIMATIONS.FADE_UP,
			delay: AOS_DELAYS.SHORT + i * AOS_DELAYS.SHORT,
		}),
		IMAGE: AOS_ANIMATIONS.ZOOM_IN,
		GALLERY_IMAGE: AOS_ANIMATIONS.FADE_UP,
		SECTION_HEADER: AOS_ANIMATIONS.FADE_DOWN,
		SECTION_CONTENT: { ...AOS_ANIMATIONS.FADE_UP, delay: AOS_DELAYS.SHORT },
		FORM_FIELD: AOS_ANIMATIONS.SLIDE_UP,
		FORM_BUTTON: { ...AOS_ANIMATIONS.FADE_UP, delay: AOS_DELAYS.MEDIUM },
		TESTIMONIAL: AOS_ANIMATIONS.FADE_LEFT,
		QUOTE: { ...AOS_ANIMATIONS.FADE_RIGHT, duration: AOS_DURATIONS.SLOW },
		STAT_ITEM: AOS_ANIMATIONS.ZOOM_IN,
	};
}
