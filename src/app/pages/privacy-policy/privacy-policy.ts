import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ScrollToTopComponent } from "../../../shared/components/scroll-to-top/scroll-to-top";

@Component({
	selector: "app-privacy-policy",
	standalone: true,
	imports: [CommonModule, RouterModule, ScrollToTopComponent],
	templateUrl: "./privacy-policy.html",
	styleUrls: ["./privacy-policy.scss"],
})
export class PrivacyPolicy {
	currentYear = new Date().getFullYear();
}
