# 🎓 Learning Management Platform
# BullaSoft.dev

This is my first tech capstone project – a full-featured Learning Management Platform built with React.js. The platform helps users explore tech content, programming languages, and essential software tools.

---

📌 Table of Contents

- Overview
- Features
- Tech Stack
- Component Structure
- Pages
- Known Issues & Challenges
- Future Improvements
- Getting Started



 📖 Overview

This project was developed as part of my capstone, showcasing my frontend skills with React. It includes multiple routes, forms, reusable components, and internal navigation. The app is structured to provide a smooth learning experience with a dedicated dashboard for authenticated users.



🌟 Features

- React Router navigation across pages and sections
- Smooth in-page anchor navigation
- Newsletter page with regional news tabs
- Login and Sign-Up with Formik validation and state management
- Dashboard with multiple sections (Lessons, Roadmaps, Settings)
- Community section (coming soon)
- Responsive design for all screen sizes



 ⚙️ Tech Stack

- React.js (Frontend)
- React Router DOM (Page navigation)
- Formik (Form management and validation)
- Tailwind



🧩 Component Structure

🔹 Shared Components
- Header: Uses React Router for page navigation
- Hero: Contains anchor tags for scrolling to:
  - About
  - Programming Languages
  - Softwares
  - Contact

 🔹 Section Components
- About Section
- Programming Languages
- Softwares
- Contact



 🗂️ Pages

 🏠 Home Page
- Landing page with the Hero and all main sections

 📰 Newsletter Page
- Contains tabs or navigation for regional updates:
  - Africa
  - Europe
  - Asia
  - America
- Navigation between regions handled by React Router

 🔐 Login Page
- Built with Formik
- Validates user inputs
- Current Issue: Redirect to dashboard after login not working

 📝 Sign Up Page
- Built with Formik
- Validates and collects user input
- Current Issue: User input is not yet stored

 📊 Dashboard
- Protected route (to be secured in the future)
- Internal navigation between:
  - Dashboard Home
  - Lessons
  - Roadmaps
  - Settings

🧑‍🤝‍🧑 Community (Coming Soon)
- Placeholder for future community features

---

 ❗ Known Issues & Challenges

- 🔁 Login Redirect: After successful login, the user should be redirected to the Dashboard – currently not working.
- 💾 Sign-Up Storage: User data from the sign-up form is not stored or saved yet.
- 🎨 Community Section: Component is created but not yet designed.



 🔮 Future Improvements

- Store user inputs using local storage, Firebase, or a backend
- Implement protected routes to secure the dashboard
- Connect Newsletter to real news APIs
- Design and implement the Community component
- Add progress tracking, quizzes, and certificates
- Responsive animations and UI polish



