import { Component } from "@angular/core";
import {
	FormsModule,
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	FormArray,
	Validators,
} from "@angular/forms";
import { Container } from "../../../../../shared/components/container/container";
import { SectionHeader } from "../../../../../shared/components/section-header/section-header";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { CommonModule } from "@angular/common";
import {
	heroCheckCircle,
	heroExclamationTriangle,
	heroUser,
	heroHeart,
	heroPuzzlePiece,
	heroClipboardDocumentList,
	heroPhone,
	heroEnvelope,
	heroVideoCamera,
} from "@ng-icons/heroicons/outline";
import {
	SIMPLE_SERVICES,
	SimpleBookingFormData,
} from "../../../../../shared/models/booking.const";
import {
	EmailService,
	EmailData,
} from "../../../../../shared/services/email.service";
import { Navbar } from "../../../../../shared/components/layout/navbar/navbar";

@Component({
	selector: "app-book-schedule",
	imports: [
		Container,
		SectionHeader,
		FormsModule,
		ReactiveFormsModule,
		NgIcon,
		CommonModule,
		Navbar,
	],
	templateUrl: "./book-schedule.html",
	styleUrl: "./book-schedule.scss",
	viewProviders: [
		provideIcons({
			heroCheckCircle,
			heroExclamationTriangle,
			heroUser,
			heroHeart,
			heroPuzzlePiece,
			heroClipboardDocumentList,
			heroPhone,
			heroEnvelope,
			heroVideoCamera,
		}),
	],
})
export class BookSchedule {
	contactForm: FormGroup;
	isSubmitting = false;
	submissionSuccess = false;
	submissionError = false;

	// Available services for selection
	serviceOptions = [
		{ value: "Long-Term Care Services", label: "Long-Term Care Services" },
		{
			value: "Development Disability Care",
			label: "Development Disability Care",
		},
		{
			value: "Mental Health Support and Guidance",
			label: "Mental Health Support and Guidance",
		},
		{
			value: "Compassionate Hospice Care",
			label: "Compassionate Hospice Care",
		},
		{ value: "General/Other", label: "General/Other" },
	];

	// Preferred contact methods
	contactPreferences = [
		{ value: "phone", label: "Phone Call", icon: "heroPhone" },
		{ value: "email", label: "Email", icon: "heroEnvelope" },
		{ value: "video", label: "Video Call", icon: "heroVideoCamera" },
		{ value: "in-person", label: "In-Person Visit", icon: "heroUser" },
	];

	// Available time slots for scheduling
	timeSlots = [
		"Morning (8:00 AM - 12:00 PM)",
		"Afternoon (12:00 PM - 5:00 PM)",
		"Evening (5:00 PM - 8:00 PM)",
	];

	constructor(private fb: FormBuilder, private emailService: EmailService) {
		this.contactForm = this.createContactForm();
	}

	private createContactForm(): FormGroup {
		return this.fb.group({
			name: ["", [Validators.required, Validators.minLength(2)]],
			email: ["", [Validators.required, Validators.email]],
			phone: [""],
			service: ["", [Validators.required]],
			preferredContact: ["", [Validators.required]],
			preferredTime: [""],
			preferredDate: [""],
			message: ["", [Validators.required]],
		});
	}

	async submit(): Promise<void> {
		console.log("Clicked");
		console.log(this.contactForm.valid);
		if (this.contactForm.valid) {
			this.isSubmitting = true;
			this.submissionError = false;

			try {
				// Prepare email data
				const emailData: EmailData = {
					from_name: this.contactForm.get("name")?.value,
					from_email: this.contactForm.get("email")?.value,
					phone: this.contactForm.get("phone")?.value,
					service: this.contactForm.get("service")?.value,
					preferred_contact: this.contactForm.get("preferredContact")?.value,
					preferred_date: this.contactForm.get("preferredDate")?.value,
					preferred_time: this.contactForm.get("preferredTime")?.value,
					message: this.contactForm.get("message")?.value,
				};

				// Send email using EmailJS
				const response = await this.emailService.sendEmail(emailData);
				console.log("Email sent successfully:", response);

				// Show success message
				this.isSubmitting = false;
				this.submissionSuccess = true;

				// Reset form after successful submission
				setTimeout(() => {
					this.submissionSuccess = false;
					this.contactForm.reset();
				}, 3000);
			} catch (error) {
				console.error("Email sending failed:", error);
				this.isSubmitting = false;
				this.submissionError = true;
			}
		} else {
			// Mark all fields as touched to show validation errors
			this.markFormGroupTouched(this.contactForm);
			this.submissionError = true;
		}
	}

	private markFormGroupTouched(formGroup: FormGroup): void {
		Object.keys(formGroup.controls).forEach((key) => {
			const control = formGroup.get(key);
			control?.markAsTouched();
		});
	}

	getMinDate(): string {
		const today = new Date();
		const tomorrow = new Date(today);
		tomorrow.setDate(tomorrow.getDate() + 1);
		return tomorrow.toISOString().split("T")[0];
	}

	getFieldError(fieldName: string): string | null {
		const field = this.contactForm.get(fieldName);
		if (field?.errors && field.touched) {
			if (field.errors["required"]) return "This field is required";
			if (field.errors["email"]) return "Please enter a valid email address";
			if (field.errors["minlength"])
				return `Minimum ${field.errors["minlength"].requiredLength} characters required`;
		}
		return null;
	}
}
