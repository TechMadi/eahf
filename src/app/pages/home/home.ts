import { Component } from "@angular/core";
import {
	Container,
	Gradient,
} from "../../../shared/components/container/container";
import { SectionHeader } from "../../../shared/components/section-header/section-header";
import { Header } from "./sections/header/header";
import { AboutUs } from "./sections/about-us/about-us";
import { Services } from "./sections/services/services";
import { ScrollToTopComponent } from "../../../shared/components/scroll-to-top/scroll-to-top";
import { AppFragment } from "../../../shared/models/navbar.const";

@Component({
	selector: "app-home",
	imports: [Header, AboutUs, Services, ScrollToTopComponent],
	templateUrl: "./home.html",
	styleUrl: "./home.scss",
})
export class Home {
	fragments = AppFragment;
}
