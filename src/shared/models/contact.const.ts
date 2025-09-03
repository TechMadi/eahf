export type ContactType = {
	label: string;
	icon: string; // Lucide or Heroicons name
	value: string;
	value2?: string;
	href?: string; // Optional for clickable links
};

export const CONTACT_DETAILS: ContactType[] = [
	{
		label: "Address",
		icon: "heroMap",
		value: "6808 Homestead Ave, Tacoma, WA 98404",
	},
	{
		label: "Home Phone",
		icon: "PhoneIcon",
		value: "(253) 392-4256",
		href: "tel:2533024256",
	},
	{
		label: "Cell Phone",
		icon: "SmartphoneIcon",
		value: "(253) 507-3970",
		href: "tel:2535073970",
	},
	{
		label: "Fax",
		icon: "PrinterIcon",
		value: "(253) 212-2056",
	},
	{
		label: "Email",
		icon: "MailIcon",
		value: "info@eafhome.us",
		href: "mailto:info@eafhome.us",
	},
];

export const Mini_Contact_Details: ContactType[] = [
	{
		label: "Opening Hours",
		icon: "heroClock",
		value: "Monday – Friday: 9:00 AM – 6:00 PM",
		value2: "Saturday: 10:00 AM – 4:00 PM",
	},
	{
		label: "Address",
		icon: "heroMap",
		value: "6808 Homestead Ave, Tacoma, WA 98404",
	},

	{
		label: "Call Us",
		icon: "heroPhone",
		value: "Home : (253) 302-4256",
		value2: "Phone : (253) 507-3970",
		href: "tel:2533024256",
	},

	{
		label: "Drop an email",
		icon: "heroEnvelope",
		value: "info@eafhome.us",
		href: "mailto:info@eafhome.us",
	},
];
