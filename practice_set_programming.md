# Practice Set / Q&A Log

## Git & Repository Setup

### Question
The GitHub repository only has the `README.md` file.

### Answer
The first commit in the repository history (`c0ada7c`) only contained the `README.md` file. However, a subsequent commit (`aa4431d`) containing all 157 project files and configurations was successfully pushed to the `main` branch. If you refresh your GitHub repository page, you will see the full project structure (including the `src/` and `public/` directories, `package.json`, and `.gitignore`).

---

## Vercel Deployment

### Question
Can I start a new deployment on Vercel by importing this GitHub repository?

### Answer
Yes, absolutely! Since the complete React project is now pushed to GitHub, you can import it directly to Vercel to create a live deployment:
1. Log in to your Vercel Dashboard (https://vercel.com).
2. Click the **Add New...** dropdown button at the top-right and select **Project**.
3. Under **Import Git Repository**, connect your GitHub account (if not already done) and search for the `testing` repository. Click **Import**.
4. Vercel will automatically auto-detect the framework preset as **Create React App** (using `react-scripts`).
5. Open the **Environment Variables** section and manually add all the keys and values from your local `.env` file (e.g., `REACT_APP_FIREBASE_API_KEY`, `REACT_APP_EMAILJS_SERVICE_ID`, etc.) so the database and contact forms function correctly.
6. Click **Deploy**. Vercel will compile the codebase, build the production build, and generate a public live URL.

---

## Local Development vs. Production Deployment Commands

### Question
Is the command I use `npm start`?

### Answer
- **For Local Development (on your computer):** Yes! You run `npm start` to spin up the local development server at `http://localhost:3000`.
- **For Vercel Deployment:** No, you do not need to enter any commands. Vercel automatically detects your project settings and executes `npm run build` under the hood to compile and host your application.

---

## Next Steps

### Question
What should I do now?

### Answer
1. Complete the Vercel deployment by entering the environment variables from `.env` into Vercel's project settings and deploying.
2. Verify the live website links, template selection, and editing capabilities.
3. Test your contact form and user authentications to confirm Firebase and EmailJS integration is active.
4. Begin the GATE Computer Organization & Architecture practice session when ready.

---

## Vercel Build Troubleshooting

### Question
Why is the Vercel build failing or hanging during the build stage?

### Answer
Create React App (CRA) builds treat ESLint warnings as compilation errors when run on CI environments (like Vercel) by default. This aborts/fails the deployment. 

To fix this:
1. We resolved all active ESLint warnings in the codebase:
   - Removed unused imports (`loginBg` in `Auth.jsx`, `FaTwitter`/`FaInstagram` in Template 1's `Contact.jsx`).
   - Replaced invalid anchor tag toggles (`href="#"`) with proper HTML `<button type="button">` components styled like links in `Auth.jsx`.
2. A clean local build was run to verify that the project compiles with zero warnings or errors.
