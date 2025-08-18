import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
	selector: "app-container",
	standalone: true,
	imports: [],
	templateUrl: "./container.html",
	styleUrl: "./container.scss",
})
export class Container {
	class = input<string>("");
}

// Gradient

@Component({
	selector: "app-gradient",
	standalone: true,
	imports: [NgClass],
	template: `
		<div
			class="bg-gradient-to-br from-[#FFF5E1] from-20% via-[#F9B5A8] via-60% to-[#F9DC86] sm:bg-gradient-to-tr"
			[ngClass]="[class()]"
		>
			<ng-content></ng-content>
		</div>
	`,
	styleUrl: "./container.scss",
})
export class Gradient {
	class = input<string>();
}
