# Quick Setup Guide - Get Your Contact Form Working in 5 Minutes! 🚀

## Step 1: Sign Up for Formspree (2 minutes)

1. **Go to:** https://formspree.io/
2. **Click:** "Sign Up" or "Get Started" button
3. **Sign up** with your email address (no credit card needed)
4. **Verify** your email address (check your inbox)

## Step 2: Create a Form (1 minute)

1. After logging in, you'll see a dashboard
2. **Click:** "New Form" or "Create Form" button
3. **Name it:** "Website Contact Form" (or any name you like)
4. **Copy the Form Endpoint URL** - it looks like this:
   ```
   https://formspree.io/f/xxxxxxxxxx
   ```
   (The x's are your unique form ID)

## Step 3: Set Your Email Address (1 minute)

1. In the form settings, find **"Send submissions to"** or **"Email"** field
2. **Enter:** nochance19900208@gmail.com
3. **Save** the settings

## Step 4: Add to Your Project (1 minute)

1. **Create a new file** called `.env` in the root folder of your project
   (Same folder where `package.json` is located)

2. **Copy and paste this into the .env file:**
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

3. **Replace** `YOUR_FORM_ID` with the actual form ID from Step 2

   **Example:** If your endpoint is `https://formspree.io/f/xvgndzky`, then your .env file should be:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xvgndzky
   ```

4. **Save** the `.env` file

## Step 5: Restart Your Server

**Stop your current server** (Press Ctrl+C in the terminal)

**Then start it again:**
```bash
npm run dev
```

## ✅ Done!

Now when someone fills out your contact form, you'll receive an email at **nochance19900208@gmail.com**!

---

## Need Help?

- **Can't find the form ID?** Look in the Formspree dashboard under "Forms" - the endpoint URL is shown there
- **Still seeing errors?** Make sure:
  - The `.env` file is in the root folder (same folder as `package.json`)
  - You replaced `YOUR_FORM_ID` with your actual form ID
  - You restarted your server after creating the `.env` file
- **Visit:** https://help.formspree.io/ for more help

