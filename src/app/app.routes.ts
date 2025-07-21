import { Routes } from "@angular/router";
import { ComingSoon } from "../shared/pages/coming-soon/coming-soon";

export const routes: Routes = [
	{
		path: "",
		component: ComingSoon,
		pathMatch: "full",
	},
	{
		path: "**",
		component: ComingSoon,
		pathMatch: "full",
	},
];
