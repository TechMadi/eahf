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
	BookSchedule = "book-schedule",
	CareCategories = "care-categories",
}

export const NAV_LIST: IMenu[] = [
	{ routerLink: "/", label: "Home" },
	{ routerLink: "/", fragment: "what-we-do", label: "What we do" },
	{ routerLink: "/", fragment: "care-categories", label: "Care Categories" },
	{ routerLink: "/", fragment: "about-us", label: "About Us" },
	{ routerLink: "/book", label: "Book Schedule" },
	{ routerLink: "/contact-us", label: "Contact" },
];
