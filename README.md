🧠 AI Model Inventory Manager
🚀 Live Website

🔗 Visit Live Site

🔗 Server Repo (Vercel)

📋 Project Overview

AI Model Inventory Manager is a full-stack web application built using React.js, Express.js, MongoDB, and Firebase Authentication.
The system allows users to add, view, update, delete, and purchase AI models while maintaining secure authentication and responsive design.

It simulates real-world AI model repositories like Hugging Face, Kaggle, and Model Zoo — helping users understand how AI models are managed, categorized, and utilized.

🎯 Why This Project?

The project bridges web development and AI concepts, enabling beginners to understand:

How AI models are stored and cataloged.

How CRUD operations and authentication work in real-world apps.

Integration between frontend (React), backend (Express + MongoDB), and Firebase for security.

💡 Key Features
🔐 Authentication

User Registration & Login with Firebase.

Google Sign-In supported.

Password validation (uppercase, lowercase, minimum 6 chars).

Persisted login on page reload for private routes.

⚙️ CRUD Operations

Add, Edit, Delete, and View AI models.

Each model includes name, framework, use case, dataset, description, and image.

Models stored securely in MongoDB.

Only the creator can edit or delete their models.

💾 Data Management

MongoDB Atlas used for storing model data.

RESTful APIs with Express.js for all CRUD routes.

Secure Firebase token verification for restricted actions (optional admin SDK used).


🧩 Dynamic UI

Latest Models Section: Fetch and display the 6 newest models dynamically.

All Models Page: Grid and table view with search & filter (framework-based).

My Models Page: Displays user-created models.

My Purchases Page: Displays models purchased by the logged-in user.

💸 Purchase Functionality

Purchase any model → instantly increments purchase count using $inc.

Real-time UI update after successful purchase.


🌓 Extra Features

Dark/Light Theme Toggle (affects the entire site).

Loading Spinner for data fetching and form submission.

Custom 404 Error Page with animation & “Return Home” button.

Fully responsive design (mobile, tablet, desktop).

Toast notifications (no browser alerts used).


⚙️ Tech Stack
Layer	Technologies
Frontend	React.js, React Router DOM, Tailwind CSS, DaisyUI, Toastify
Backend	Express.js, Node.js
Database	MongoDB Atlas
Authentication	Firebase Authentication + Firebase Admin SDK
Hosting	Firebase (client) & Vercel (server)

🧭 Deployment

Frontend: Hosted on Firebase

Backend: Hosted on Vercel

MongoDB Atlas: Used as cloud database

Firebase: Used for authentication



🏁 Final Notes
--> This project fulfills all the mandatory and challenge requirements, including:

✅ CRUD operations
✅ Firebase authentication
✅ MongoDB integration
✅ Private routes
✅ Purchase counter
✅ Search & filter
✅ 404 page
✅ Loading states
✅ Responsive UI
✅ Dark/Light theme toggle



👨‍💻 Developer

Monwar Hossan Himel
📧 Email: monwarhossanhimel@gmail.com

🌐 Portfolio: [https://drive.google.com/drive/u/0/home]
💼 GitHub: [https://github.com/himel2535]
