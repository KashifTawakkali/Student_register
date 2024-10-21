# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify]

---

## Project Overview

### Development Steps & Key Points:
1. **Welcome & Introduction Screen:** 
   - Created a welcoming landing page with a brief overview of the registration process.
   - Implemented a progress indicator (e.g., “Step 1 of 5”) that updates as the user advances through each section.
   - Used the provided logo and colour scheme for brand consistency, placing the logo prominently on this screen.
   - Micro-animations: Added a subtle fade-in for the welcome text and logo. Animated the progress indicator as the user moves through steps.
  
2. **Personal Information:** 
   - Included fields: Title (Dropdown), First Name, Middle Name, Last Name, Mobile No., Emergency Contact No., Student Email ID, Marital Status (Dropdown), Gender (Dropdown), Date of Birth (Calendar picker).
   - Made all mandatory fields clearly visible with visual cues (e.g., an asterisk or colour change).
   - Included autofill and dropdown options to reduce typing effort.
   - Micro-animations: Used animations for dropdown expansion and a soft glow for mandatory fields when active.

3. **Address & Passport Information:**
   - Included fields: Native Country (Dropdown), Native State (Dropdown), Native City (Dropdown), Postal Code, Passport No., Passport Expiry (Calendar picker).
   - Grouped similar fields (e.g., address fields in one section) and used accordion-style sections to maintain a clean, organized layout.
   - Micro-animations: Implemented expand/collapse animations for accordion sections and a smooth transition when moving between sections.

4. **Academic Interests:**
   - Included fields: Interested Country (Dropdown), English Proficiency Test (Dropdown).
   - Displayed conditional fields based on user selections.
   - Micro-animations: Used animations to display/hide conditional fields.

5. **Educational Background:**
   - Included fields: Previous Education Details (Qualification, Institution/Board/University, Percentage, Passing Year, Country) — Repeatable with an “Add Another Qualification” button.
   - Enabled users to add multiple qualifications dynamically.
   - Micro-animations: Added a smooth slide-down effect when new fields appear.

6. **Background Information:**
   - Included fields: Visa rejection status (Yes/No), Gap in Education (Dropdown).
   - Included tooltips to provide additional context on specific fields.
   - Micro-animations: Fade-in tooltips on hover.

7. **Document Upload:**
   - Included upload fields for various documents.
   - Incorporated a drag-and-drop area for file uploads.
   - Micro-animations: Added a drag-over highlight effect and file upload progress animations.

8. **Final Review & Submission:**
   - Displayed a summary of all information entered.
   - Implemented a prominent “Submit” button.
   - Micro-animations: Used a slight bounce effect for the “Submit” button.

9. **Confirmation & Next Steps:**
   - Showed a confirmation message with follow-up steps upon submission.
   - Provided options for downloading or printing a summary of the submitted information.
   - Micro-animations: Applied a confetti effect to reinforce successful completion.

### Development & Deployment Steps:
1. **Technology Stack:** 
   - Used React for a responsive, modular, and maintainable codebase.
   - Integrated form validation libraries (e.g., Formik).
   - Utilized CSS animations or libraries for adding micro-animations.

2. **Version Control:**
   - Set up a Git repository for code versioning and collaboration.

3. **Testing:**
   - Ensured cross-browser compatibility.

4. **API Integration:**
   - Integrated with backend services for data submission.

5. **Deployment:**
   - Prepared a staging environment and deployed the form to test functionality.

---

## Repository Links
- Frontend Repository: [GitHub - Student Registration](https://github.com/KashifTawakkali/Student_register)
- Backend Repository: [GitLab - Student Registration Backend](https://gitlab.com/KashifTawakkali/register_backend)

## Live Deployments
- Frontend Live: [Student Registration Form](https://student-register-eight.vercel.app/)
- Backend Live: [Student Registration Backend](https://register-backend-silk.vercel.app/)
