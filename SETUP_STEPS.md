# Step-by-Step Setup Instructions

## Step 1: Get Your Formspree Endpoint (2 minutes)

1. Go to: **https://formspree.io/**
2. Click **"Get Started"** or **"Sign Up"**
3. Sign up with your email (free, no credit card needed)
4. After logging in, click **"New Form"** or **"Create Form"**
5. Name it: "Contact Form"
6. **Copy the Form Endpoint URL** - it looks like:
   ```
   https://formspree.io/f/xxxxxxxxxx
   ```
   (You'll see this URL on the form page or in your dashboard)
7. In form settings, set recipient email to: **nochance19900208@gmail.com**
8. Save the form

## Step 2: Create the .env File (1 minute)

1. Open your project folder in VS Code or any text editor
2. In the **root folder** (same folder where `package.json` is located), create a **new file**
3. Name it exactly: `.env` (with the dot at the beginning)
4. Open the `.env` file and paste this line:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID from Step 1
   
   **Example:** If your endpoint is `https://formspree.io/f/xvgndzky`, your `.env` file should contain:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xvgndzky
   ```
6. Save the file (Ctrl+S)

## Step 3: Restart Your Server

1. In your terminal, stop the server: Press **Ctrl+C**
2. Start it again:
   ```bash
   npm run dev
   ```

## ✅ Done!

Your contact form should now work! Test it by submitting a message - you'll receive an email at **nochance19900208@gmail.com**

---

## Need Help?

- **Can't find where to create the .env file?** It should be in the same folder as `package.json`, `index.html`, etc.
- **Windows users:** If you can't create a file starting with a dot, create it as `env` first, then rename it to `.env`
- **Having trouble?** Share your Formspree endpoint URL and I can help verify your .env file is correct!

