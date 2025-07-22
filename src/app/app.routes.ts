import { Routes } from "@angular/router";
import { ComingSoon } from "./pages/coming-soon/coming-soon";
import { Home } from "./pages/home/home";

export const routes: Routes = [
	{
		path: "",
		component: Home,
		pathMatch: "full",
	},

	{
		path: "**",
		component: ComingSoon,
		pathMatch: "full",
	},
];
