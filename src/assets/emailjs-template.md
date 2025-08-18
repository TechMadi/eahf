# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. Go to Email Services in your EmailJS dashboard
2. Add a new service (Gmail, Outlook, etc.)
3. Follow the authentication steps
4. Note down your **Service ID**

## 3. Create Email Template
Create a new template with the following variables:

### Template Variables:
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email address
- `{{phone}}` - Customer's phone number
- `{{service}}` - Selected service
- `{{preferred_contact}}` - Preferred contact method
- `{{preferred_date}}` - Preferred consultation date
- `{{preferred_time}}` - Preferred consultation time
- `{{message}}` - Additional information/message
- `{{to_name}}` - Your business name (Excellence Adult Family Home)

### Sample Email Template:
```
Subject: New Consultation Request from {{from_name}}

Dear {{to_name}},

You have received a new consultation request through your website.

**Customer Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone}}
- Service of Interest: {{service}}
- Preferred Contact Method: {{preferred_contact}}
- Preferred Date: {{preferred_date}}
- Preferred Time: {{preferred_time}}

**Additional Information:**
{{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Website Contact Form
```

## 4. Get Your Credentials
After setting up:
1. **Public Key**: Found in Account settings
2. **Service ID**: From your email service
3. **Template ID**: From your email template

## 5. Update Environment Configuration
Replace the placeholders in `src/environments/environment.ts`:

```typescript
emailjs: {
    publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',
    serviceId: 'YOUR_ACTUAL_SERVICE_ID', 
    templateId: 'YOUR_ACTUAL_TEMPLATE_ID'
}
```

## 6. Test the Form
1. Run your application
2. Fill out the booking form
3. Submit and check if email is received
4. Check browser console for any errors

## 7. Security Note
- EmailJS public key is safe to expose in frontend code
- Consider rate limiting on EmailJS dashboard
- Set up email filters/rules in your email client for organization

## Troubleshooting
- Check browser console for errors
- Verify all credentials are correct
- Ensure email service is properly authenticated
- Test template variables in EmailJS dashboard first
