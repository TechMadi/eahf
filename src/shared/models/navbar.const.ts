export type IMenu = {
	routerLink?: string;
	label: string;
	fragment?: string;
};
export enum AppRoute {
	Home = "/",
	Contact = "/contact-us",
}

export enum AppFragment {
	WhatWeDo = "what-we-do",
	AboutUs = "about-us",
}

export const NAV_LIST: IMenu[] = [
	{ routerLink: "/home", label: "Home" },
	{ fragment: "what-we-do", label: "What we do" },
	{ fragment: "about-us", label: "About Us" },
	{ routerLink: "/contact-us", label: "Contact" },
];
