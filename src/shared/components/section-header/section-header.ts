import { Component, input } from "@angular/core";

@Component({
	selector: "app-section-header",
	standalone: true,
	imports: [],
	templateUrl: "./section-header.html",
	styleUrl: "./section-header.scss",
})
export class SectionHeader {
	title = input<string>("");
	eyedrop = input<string>("");
	description = input<string>("");
	mode = input<"dark" | "light">("light");
}
