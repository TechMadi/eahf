import { Component, input } from "@angular/core";
import { Container } from "../container/container";

@Component({
	selector: "app-section-header",
	imports: [Container],
	templateUrl: "./section-header.html",
	styleUrl: "./section-header.scss",
})
export class SectionHeader {
	title = input<string>("");
	eyedrop = input<string>("");
	description = input<string>("");
	mode = input<"dark" | "light">("light");
}
