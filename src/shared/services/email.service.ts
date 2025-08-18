import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser";
import { environment } from "../../environments/environment.development";

export interface EmailData {
	from_name: string;
	from_email: string;
	phone?: string;
	service: string;
	preferred_contact: string;
	preferred_date?: string;
	preferred_time?: string;
	message: string;
}

export type EmailType = 'contact' | 'booking';

@Injectable({
	providedIn: "root",
})
export class EmailService {
	private readonly PUBLIC_KEY = environment.emailjs.publicKey;
	private readonly SERVICE_ID = environment.emailjs.serviceId;
	private readonly BOOKING_TEMPLATE_ID = environment.emailjs.bookingTemplateId || environment.emailjs.templateId;
	private readonly CONTACT_TEMPLATE_ID = environment.emailjs.contactTemplateId || environment.emailjs.templateId;

	constructor() {
		// Initialize EmailJS with your public key
		emailjs.init(this.PUBLIC_KEY);
	}

	async sendEmail(emailData: EmailData, emailType: EmailType = 'contact'): Promise<any> {
		try {
			// Select appropriate template based on email type
			const templateId = emailType === 'booking' ? this.BOOKING_TEMPLATE_ID : this.CONTACT_TEMPLATE_ID;
			
			const templateParams = {
				from_name: emailData.from_name,
				from_email: emailData.from_email,
				phone: emailData.phone || "Not provided",
				service: emailData.service,
				preferred_contact: emailData.preferred_contact,
				preferred_date: emailData.preferred_date || "Not specified",
				preferred_time: emailData.preferred_time || "Not specified",
				message: emailData.message,
				to_name: "Excellence Adult Family Home", // Your business name
				email_type: emailType === 'booking' ? 'Booking Request' : 'General Contact', // Helper for template
			};

			const response = await emailjs.send(
				this.SERVICE_ID,
				templateId,
				templateParams,
			);

			console.log(response);

			return response;
		} catch (error) {
			console.error("EmailJS Error:", error);
			throw error;
		}
	}

	// // Method to update configuration if needed
	// updateConfig(publicKey: string, serviceId: string, templateId: string) {
	// 	this.PUBLIC_KEY = publicKey;
	// 	this.SERVICE_ID = serviceId;
	// 	this.TEMPLATE_ID = templateId;
	// 	emailjs.init(this.PUBLIC_KEY);
	// }
}
