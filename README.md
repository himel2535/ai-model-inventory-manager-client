<h2 align="center">🧠 AI Model Inventory Manager</h2>

<div align="center"> <img src="https://i.ibb.co.com/Y78LpG8r/Screen-Shot-2025-11-19-at-2-05-53-PM.png" alt="project screenshot" width="60%" height="50%"/> </div>


<p align="center">A full-stack web application for managing AI model repositories — inspired by platforms like Hugging Face, Kaggle & Model Zoo.</p>

---

<h4>🔗 Live Links
🚀 Live Website</h4>

https://ai-model-inventory-manag-45b01.web.app/

---

<h4>
  🖥️ Server Repository :
</h4>

https://github.com/himel2535/ai-model-inventory-manager-server

---

<h4>📌 Project Overview :</h4>

AI Model Inventory Manager is a React + Express + MongoDB + Firebase powered full-stack application where users can add, update, delete, purchase, and explore AI models.
It helps beginners understand how AI models are stored, categorized & managed in real-world model hubs.

---

<h4>🎯 Key Features :</h4>

🔐 Authentication (Firebase)

Email/Password Login & Register

Google Sign-in

Password Validation

Persistent Login on reload

Private routes

⚙️ CRUD Operations (MongoDB + Express)

Add, Edit, Delete, View AI Models

Only model creator can edit/delete their models

Secure API & token-based actions

<h4>🧾 Model Data Includes:</h4>

Model Name

Framework (TensorFlow / PyTorch / JAX etc.)

Use Case

Dataset

Description

Image

🛒 Purchase System

Buy any model

Purchase count increases using $inc

My Purchases Page

🌓 UI Features

Dark/Light theme toggle

Latest Models Section (shows newest 6 models)

Search & Filter (framework wise)

My Models Page

404 Page with animation

Toast notifications

Responsive for all screen sizes

---

<h4>🧩 Tech Stack
Frontend</h4>

React.js

React Router DOM

Tailwind CSS

DaisyUI

Framer Motion

Firebase

Backend

Node.js

Express.js

Database

MongoDB Atlas

Hosting

Firebase Hosting (Client)

Vercel (Server)

---


<h4>📦 Dependencies (Client) :</h4>

Main Dependencies  
{
  "@tailwindcss/vite": "^4.1.17",
  "firebase": "^12.5.0",
  "framer-motion": "^12.23.24",
  "lottie-react": "^2.4.1",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-icons": "^5.5.0",
  "react-loader-spinner": "^8.0.0",
  "react-router": "^7.9.5",
  "react-toastify": "^11.0.5",
  "react-tsparticles": "^2.12.2",
  "sweetalert2": "^11.26.3",
  "tsparticles": "^3.9.1"
}

Dev Dependencies 
{
  "@eslint/js": "^9.36.0",
  "@types/react": "^19.1.16",
  "@types/react-dom": "^19.1.9",
  "@vitejs/plugin-react": "^5.0.4",
  "daisyui": "^5.4.7",
  "eslint": "^9.36.0",
  "eslint-plugin-react-hooks": "^5.2.0",
  "eslint-plugin-react-refresh": "^0.4.22",
  "globals": "^16.4.0",
  "postcss": "^8.5.6",
  "tailwindcss": "^4.1.17",
  "vite": "^7.1.7"
}

---

<h4>🏗️ How to Run the Project (Locally) :</h4>

🔧 1. Clone the Repository
git clone https://github.com/himel2535/ai-model-inventory-manager-client
cd ai-model-inventory-manager-client

📦 2. Install Dependencies
npm install

🔐 3. Setup Firebase Environment Variables

Create a .env file in project root:

VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
VITE_SERVER_URL=https://your-vercel-server.vercel.app

▶️ 4. Run Development Server :
npm run dev


Project will open at:
👉 http://localhost:5173/

🚀 How to Run Server (Backend)
1. Clone the server repo:
git clone https://github.com/himel2535/ai-model-inventory-manager-server
cd ai-model-inventory-manager-server

2. Install dependencies:
npm install

3. Setup .env:
MONGODB_URI=your_mongodb_connection
FIREBASE_SERVICE_ACCOUNT=your_firebase_admin_credentials

4. Run server:
npm run start

---

<h4>👨‍💻 Developer :</h4>

<h5>Monwar Hossan Himel</h5>
📧 Email: monwarhossanhimel@gmail.com

🌐 Portfolio: https://drive.google.com/drive/u/0/home

💼 GitHub: https://github.com/himel2535
