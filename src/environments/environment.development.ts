export const environment = {
	production: false,
	firebaseConfig: {},
	emailjs: {
		publicKey: "45JdCAlYlWe_2pdJo", // Replace with your actual public key
		serviceId: "service_t5prpzn", // Replace with your actual service ID
		bookingTemplateId: "temp_book_x4dy7mq", // Template for booking/schedule requests
		contactTemplateId: "template_jue6tvd", // Template for general contact form
		// Backward compatibility
		templateId: "temp_book_x4dy7mq", // Default template (for existing code)
	},
};
