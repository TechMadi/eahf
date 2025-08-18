import { Routes } from "@angular/router";
import { ComingSoon } from "./pages/coming-soon/coming-soon";
import { Home } from "./pages/home/home";
import { ContactUs } from "./pages/home/sections/contact-us/contact-us";
import { BookSchedule } from "./pages/home/sections/book-schedule/book-schedule";
import { PrivacyPolicy } from "./pages/privacy-policy/privacy-policy";

export const routes: Routes = [
	{
		path: "",
		component: Home,
		pathMatch: "full",
	},
	{
		path: "contact-us",
		component: ContactUs,
		pathMatch: "full",
	},
	{
		path: "book",
		component: BookSchedule,
		pathMatch: "full",
	},
	{
		path: "privacy-policy",
		component: PrivacyPolicy,
		pathMatch: "full",
	},

	{
		path: "**",
		component: ComingSoon,
		pathMatch: "full",
	},
];
