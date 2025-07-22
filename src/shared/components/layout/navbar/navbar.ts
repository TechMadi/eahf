import { Component, input, forwardRef } from "@angular/core";
import {
	PlusGrid,
	PlusGridItem,
	PlusGridRow,
} from "../../../plus-grid/plus-grid";
import { IMenu, NAV_LIST } from "../../../models/navbar.const";
import { RouterModule } from "@angular/router";
@Component({
	selector: "app-navbar-mobile-btn",
	imports: [PlusGrid, PlusGridItem, RouterModule],
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
					[routerLink]="navLink.routerLink ?? ''"
					[fragment]="navLink.fragment ?? ''"
					class="text-base font-medium text-gray-950 animate-fade-in-down duration-150 ease-in-out delay-[100ms] tap-highlight-none"
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
}

@Component({
	selector: "app-navbar-desktop",
	imports: [PlusGrid, PlusGridItem, RouterModule],
	template: `
		<nav class="relative hidden lg:flex">
			@for (navLink of navLinks; track $index) {
			<app-plus-grid-item class="relative flex">
				<a
					[routerLink]="navLink.routerLink ?? ''"
					[fragment]="navLink.fragment"
					class="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply data-hover:bg-black/2.5 "
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
