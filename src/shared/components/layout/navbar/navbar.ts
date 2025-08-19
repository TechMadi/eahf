import { Component, input, forwardRef, OnInit, OnDestroy } from "@angular/core";
import {
	PlusGrid,
	PlusGridItem,
	PlusGridRow,
} from "../../../plus-grid/plus-grid";
import { IMenu, NAV_LIST } from "../../../models/navbar.const";
import {
	RouterModule,
	Router,
	NavigationEnd,
	ActivatedRoute,
} from "@angular/router";
import { ScrollService } from "../../../services/scroll.service";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
	selector: "app-navbar-mobile-btn",
	standalone: true,
	imports: [RouterModule],
	template: `
		<button
			type="button"
			class="hs-collapse-toggle flex size-12 items-center justify-center rounded-lg lg:hidden hover:bg-black/5"
			data-hs-collapse="#mobile-nav"
			aria-controls="mobile-nav"
			aria-label="Toggle navigation"
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
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
		</button>
	`,
	styleUrl: "./navbar.scss",
})
export class MobileNavbarBtn {
	mobileLinks: IMenu[] = NAV_LIST;
}

@Component({
	selector: "app-navbar-mobile",
	standalone: true,
	imports: [RouterModule],
	template: `
		<div
			id="mobile-nav"
			class="hs-collapse hidden overflow-hidden transition-all duration-300 lg:hidden"
		>
			<div class="px-4 py-6 flex flex-col gap-6">
				@for (navLink of navLinks; track $index) {
				<a
					(click)="onNavClick(navLink, $event)"
					[routerLink]="navLink.routerLink || undefined"
					[fragment]="
						navLink.routerLink ? navLink.fragment || undefined : undefined
					"
					[class.active]="isActive(navLink)"
					class="text-base font-medium text-gray-950 animate-fade-in-down duration-150 ease-in-out delay-[100ms] tap-highlight-none cursor-pointer"
				>
					{{ navLink.label }}
				</a>
				}
			</div>
			<div class="relative">
				<div class="absolute inset-x-0 top-0 border-t border-black/5"></div>
				<div class="absolute inset-x-0 top-2 border-t border-black/5"></div>
			</div>
		</div>
	`,
	styleUrl: "./navbar.scss",
})
export class MobileNavbar implements OnInit, OnDestroy {
	navLinks: IMenu[] = NAV_LIST;
	private destroy$ = new Subject<void>();
	currentRoute = "";
	currentFragment = "";

	constructor(
		private scrollService: ScrollService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		// Set initial state
		this.updateActiveState();

		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntil(this.destroy$),
			)
			.subscribe(() => {
				this.updateActiveState();
			});

		// Also listen for fragment changes
		this.route.fragment.pipe(takeUntil(this.destroy$)).subscribe((fragment) => {
			this.currentFragment = fragment || "";
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private updateActiveState(): void {
		this.currentRoute = this.router.url.split("#")[0];
		this.currentFragment = this.router.url.split("#")[1] || "";
	}

	isActive(navLink: IMenu): boolean {
		// If no routerLink, this is a fragment-only link
		if (!navLink.routerLink) {
			return false;
		}

		// If there's a fragment, check both route and fragment
		if (navLink.fragment) {
			return (
				this.currentRoute === navLink.routerLink &&
				this.currentFragment === navLink.fragment
			);
		}

		// If no fragment, check only the route (exact match)
		return this.currentRoute === navLink.routerLink;
	}

	onNavClick(navLink: IMenu, event: Event): void {
		// Handle fragment-only navigation (no routerLink)
		if (navLink.fragment && !navLink.routerLink) {
			// Prevent default router navigation for fragments
			event.preventDefault();

			// Close mobile menu if needed
			const mobileNav = document.getElementById("mobile-nav");
			if (mobileNav) {
				mobileNav.classList.add("hidden");
			}

			// Scroll to fragment with offset for fixed header
			this.scrollService.scrollToFragment(navLink.fragment, 80);
		}
		// For routerLink navigation, let Angular Router handle it normally
	}
}

@Component({
	selector: "app-navbar-desktop",
	standalone: true,
	imports: [PlusGridItem, RouterModule],
	template: `
		<nav class="relative hidden lg:flex">
			@for (navLink of navLinks; track $index) {
			<app-plus-grid-item class="relative flex">
				<a
					(click)="onNavClick(navLink, $event)"
					[routerLink]="navLink.routerLink || undefined"
					[fragment]="
						navLink.routerLink ? navLink.fragment || undefined : undefined
					"
					[class.active]="isActive(navLink)"
					class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 cursor-pointer"
				>
					{{ navLink.label }}
				</a>
			</app-plus-grid-item>
			}
		</nav>
	`,
	styleUrl: "./navbar.scss",
})
export class DesktopNavbar implements OnInit, OnDestroy {
	navLinks: IMenu[] = NAV_LIST;
	private destroy$ = new Subject<void>();
	currentRoute = "";
	currentFragment = "";

	constructor(
		private scrollService: ScrollService,
		private router: Router,
		private route: ActivatedRoute,
	) {}

	ngOnInit(): void {
		// Set initial state
		this.updateActiveState();

		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntil(this.destroy$),
			)
			.subscribe(() => {
				this.updateActiveState();
			});

		// Also listen for fragment changes
		this.route.fragment.pipe(takeUntil(this.destroy$)).subscribe((fragment) => {
			this.currentFragment = fragment || "";
		});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private updateActiveState(): void {
		this.currentRoute = this.router.url.split("#")[0];
		this.currentFragment = this.router.url.split("#")[1] || "";
	}

	isActive(navLink: IMenu): boolean {
		// If no routerLink, this is a fragment-only link
		if (!navLink.routerLink) {
			return false;
		}

		// If there's a fragment, check both route and fragment
		if (navLink.fragment) {
			return (
				this.currentRoute === navLink.routerLink &&
				this.currentFragment === navLink.fragment
			);
		}

		// If no fragment, check only the route (exact match)
		return this.currentRoute === navLink.routerLink;
	}

	onNavClick(navLink: IMenu, event: Event): void {
		// Handle fragment-only navigation (no routerLink)
		if (navLink.fragment && !navLink.routerLink) {
			event.preventDefault();

			this.scrollService.scrollToFragment(navLink.fragment, 80);
		}
		// For routerLink navigation, let Angular Router handle it normally
	}
}

@Component({
	selector: "app-navbar",
	standalone: true,
	imports: [
		PlusGrid,
		PlusGridItem,
		RouterModule,
		PlusGridRow,
		DesktopNavbar,
		MobileNavbar,
		MobileNavbarBtn,
	],
	templateUrl: "./navbar.html",
	styleUrl: "./navbar.scss",
})
export class Navbar {
	navLinks: IMenu[] = NAV_LIST;
	banner = input<string>("");
}
