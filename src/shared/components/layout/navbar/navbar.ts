import { Component, input, forwardRef } from "@angular/core";
import {
	PlusGrid,
	PlusGridItem,
	PlusGridRow,
} from "../../../plus-grid/plus-grid";
import { IMenu, NAV_LIST } from "../../../models/navbar.const";
import { RouterModule } from "@angular/router";
import { ScrollService } from "../../../services/scroll.service";

@Component({
	selector: "app-navbar-mobile-btn",
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
					[fragment]="navLink.routerLink ? (navLink.fragment || undefined) : undefined"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact: navLink.routerLink === '/' }"
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
export class MobileNavbar {
	navLinks: IMenu[] = NAV_LIST;

	constructor(private scrollService: ScrollService) {}

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
	imports: [PlusGridItem, RouterModule],
	template: `
		<nav class="relative hidden lg:flex">
			@for (navLink of navLinks; track $index) {
			<app-plus-grid-item class="relative flex">
				<a
					(click)="onNavClick(navLink, $event)"
					[routerLink]="navLink.routerLink || undefined"
					[fragment]="navLink.routerLink ? (navLink.fragment || undefined) : undefined"
					routerLinkActive="active"
					[routerLinkActiveOptions]="{ exact: navLink.routerLink === '/' }"
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
export class DesktopNavbar {
	navLinks: IMenu[] = NAV_LIST;

	constructor(private scrollService: ScrollService) {}

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
