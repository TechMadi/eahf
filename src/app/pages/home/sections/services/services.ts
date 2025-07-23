import { Component } from "@angular/core";
import { Container } from "../../../../../shared/components/container/container";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";
import { NgIcon, provideIcons } from "@ng-icons/core";
import {
	heroBeaker,
	heroCalendar,
	heroFire,
	heroHandRaised,
	heroHeart,
	heroMap,
	heroPuzzlePiece,
	heroShoppingCart,
	heroSparkles,
	heroUser,
} from "@ng-icons/heroicons/outline";
import { NgClass } from "@angular/common";

@Component({
	selector: "app-services",
	imports: [Container, SectionHeader, NgIcon, NgClass],
	templateUrl: "./services.html",
	styleUrl: "./services.scss",
	viewProviders: [
		provideIcons({
			heroBeaker,
			heroFire,
			heroHeart,
			heroUser,
			heroSparkles,
			heroCalendar,
			heroShoppingCart,
			heroHandRaised,
			heroPuzzlePiece,
			heroMap,
		}),
	],
})
export class Services {
	serviceData: {
		service: string;
		icon: string;
	}[] = [
		{
			service: "Medication Management (5 rights)",
			icon: "heroBeaker",
		},
		{
			service: "Nutritious Meals: Breakfast, Lunch, Dinner",
			icon: "heroFire",
		},
		{
			service: "Monitoring Vitals",
			icon: "heroHeart",
		},
		{
			service: "Assistance with Showers & Dressing",
			icon: "heroUser",
		},
		{
			service: "Laundry & Housekeeping",
			icon: "heroSparkles",
		},
		{
			service: "Doctor Appointment Setups",
			icon: "heroCalendar",
		},
		{
			service: "Shopping Support",
			icon: "heroShoppingCart",
		},
		{
			service: "Mobility Assistance",
			icon: "heroHandRaised",
		},
		// {
		// 	service: "Engaging Activities: Uno, puzzles, Connect 4, etc.",
		// 	icon: "heroPuzzlePiece",
		// },
		// {
		// 	service: "Therapeutic Walks",
		// 	icon: "heroMap",
		// },
	];
}
