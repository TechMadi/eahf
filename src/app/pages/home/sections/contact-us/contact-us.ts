import { Component } from "@angular/core";
import { Container } from "../../../../../shared/components/container/container";
import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";
import { EmailService, EmailData } from "../../../../../shared/services/email.service";

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
	isSubmitting = false;
	submissionStatus: 'idle' | 'success' | 'error' = 'idle';
	errorMessage = '';

	contactForm = new FormGroup({
		name: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.email]),
		phone: new FormControl(""),
		message: new FormControl("", [Validators.required]),
	});

	constructor(private emailService: EmailService) {}

	async submit() {
		if (this.contactForm.invalid) {
			// Mark all fields as touched to show validation errors
			this.contactForm.markAllAsTouched();
			return;
		}

		this.isSubmitting = true;
		this.submissionStatus = 'idle';
		this.errorMessage = '';

		try {
			const formValue = this.contactForm.value;
			
			const emailData: EmailData = {
				from_name: formValue.name || '',
				from_email: formValue.email || '',
				phone: formValue.phone || 'Not provided',
				service: 'General Inquiry', // Default for contact form
				preferred_contact: 'Email', // Default for contact form
				message: formValue.message || ''
			};

			await this.emailService.sendEmail(emailData, 'contact');
			
			this.submissionStatus = 'success';
			this.contactForm.reset(); // Clear the form after successful submission
			
			// Reset success message after 5 seconds
			setTimeout(() => {
				this.submissionStatus = 'idle';
			}, 5000);
			
		} catch (error) {
			this.submissionStatus = 'error';
			this.errorMessage = 'Failed to send message. Please try again or contact us directly.';
			console.error('Contact form submission error:', error);
		} finally {
			this.isSubmitting = false;
		}
	}
}
