import { Component } from "@angular/core";
import { Container } from "../../../../../shared/components/container/container";
import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";

import {
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";

@Component({
	selector: "app-contact-us",
	imports: [Container, Navbar, SectionHeader, ReactiveFormsModule],
	templateUrl: "./contact-us.html",
	styleUrl: "./contact-us.scss",
})
export class ContactUs {
	contactForm = new FormGroup({
		name: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.email]),
		phone: new FormControl(""),
		message: new FormControl("", [Validators.required]),
	});

	submit() {
		if (this.contactForm.invalid) {
		} else {
		}
	}
}
