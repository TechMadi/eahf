# EmailJS Contact Form Template Setup

## Template Variables for Contact Form

You need to create a new template in your EmailJS dashboard specifically for the contact form with the following template variables:

### Required Template Variables:
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email address  
- `{{phone}}` - Customer's phone number (may be "Not provided")
- `{{service}}` - Will be "General Inquiry" for contact form
- `{{preferred_contact}}` - Will be "Email" for contact form
- `{{message}}` - Customer's message/inquiry
- `{{to_name}}` - Your business name (Excellence Adult Family Home)
- `{{email_type}}` - Will be "General Contact" for contact form

### Sample Contact Form Email Template:

**Subject:** New Contact Message from {{from_name}} - {{email_type}}

**Email Body:**
```
Dear {{to_name}},

You have received a new contact message through your website.

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Type: {{email_type}}
- Preferred Contact Method: {{preferred_contact}}

**Message:**
{{message}}

**Next Steps:**
Please respond to this inquiry promptly. You can reply directly to {{from_email}} or call them at {{phone}}.

Best regards,
Excellence Adult Family Home Website
```

## Setup Instructions:

1. **Create New Template in EmailJS:**
   - Go to your EmailJS dashboard
   - Create a new email template
   - Use the template content above
   - Note down the Template ID (e.g., temp_contact_xyz123)

2. **Update Environment Configuration:**
   Replace `temp_contact_x4dy7mq` in both environment files with your actual contact template ID:
   
   ```typescript
   emailjs: {
     publicKey: 'YOUR_PUBLIC_KEY',
     serviceId: 'YOUR_SERVICE_ID', 
     bookingTemplateId: 'temp_book_x4dy7mq', // Keep existing booking template
     contactTemplateId: 'YOUR_NEW_CONTACT_TEMPLATE_ID', // Replace with new template ID
     templateId: 'temp_book_x4dy7mq' // Backward compatibility
   }
   ```

3. **Test the Template:**
   - Test the template in EmailJS dashboard first
   - Then test through your contact form

## Template Differences:

**Contact Form Template:** Simpler, focuses on general inquiries
**Booking Form Template:** More detailed, includes date/time preferences and specific services

Both templates use the same variables but display different information based on the email type.
