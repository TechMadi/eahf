import { Component, Input } from "@angular/core";

@Component({
	selector: "app-container",
	imports: [],
	templateUrl: "./container.html",
	styleUrl: "./container.scss",
})
export class Container {
	@Input() class: string = "";
}
