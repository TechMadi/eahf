import { Component } from "@angular/core";
import { Navbar } from "../../../shared/components/layout/navbar/navbar";
import { Container } from "../../../shared/components/container/container";

@Component({
	selector: "app-coming-soon",
	imports: [Navbar, Container],
	templateUrl: "./coming-soon.html",
	styleUrl: "./coming-soon.scss",
})
export class ComingSoon {}
