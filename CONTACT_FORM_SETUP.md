# Contact Form Setup Instructions

Your contact form uses Formspree to send emails directly to your inbox. Setting it up is simple and free!

## Quick Setup (5 minutes)

### Step 1: Create a Free Formspree Account
1. Go to https://formspree.io/
2. Click "Sign Up" (or "Get Started")
3. Sign up with your email (no credit card required)
4. Verify your email address

### Step 2: Create a New Form
1. After logging in, click "New Form" or "Create Form"
2. Give your form a name (e.g., "Website Contact Form")
3. Copy the **Form Endpoint URL** (it looks like: `https://formspree.io/f/xxxxxxxxxx`)

### Step 3: Configure Your Email Address
1. In the form settings, set the recipient email to: **nochance19900208@gmail.com**
2. Save the settings

### Step 4: Add Endpoint to Your Project

Create a `.env` file in the root of your project (if it doesn't exist) and add:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Replace `YOUR_FORM_ID` with the actual form ID from Step 2.

**Example:**
```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xvgndzky
```

### Step 5: Restart Your Development Server

After creating the `.env` file, restart your server:
```bash
npm run dev
```

## That's It! ✨

Your contact form will now send all submissions directly to **nochance19900208@gmail.com**.

## Free Tier Limits

- **50 submissions per month** (free tier)
- Upgrade to paid plan for more submissions if needed
- All emails sent to your configured email address

## Troubleshooting

**If you see "Formspree is not configured" error:**
- Make sure you created the `.env` file
- Make sure the `VITE_FORMSPREE_ENDPOINT` variable is set correctly
- Restart your development server after adding the `.env` file

**If emails are not arriving:**
- Check your spam folder
- Verify the recipient email is set correctly in Formspree dashboard
- Check Formspree dashboard for submission logs

## Need Help?

Visit https://help.formspree.io/ for more help and documentation.

