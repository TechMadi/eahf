export interface SimpleBookingFormData {
	name: string;
	email: string;
	phone: string;
	service: string;
	additionalInfo: string;
}

export const SIMPLE_SERVICES = [
	'Medication Management',
	'Personal Care Assistance', 
	'Meal Preparation',
	'Housekeeping & Laundry',
	'Medical Appointment Coordination',
	'Mobility Assistance',
	'Social Activities',
	'24/7 Care Support',
	'General Consultation',
	'Other'
];
