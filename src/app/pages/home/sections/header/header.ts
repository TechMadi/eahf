import { Component } from "@angular/core";
import { PlusGrid } from "../../../../../shared/plus-grid/plus-grid";
import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";

@Component({
	selector: "app-header",
	imports: [Navbar],
	templateUrl: "./header.html",
	styleUrl: "./header.scss",
})
export class Header {}
