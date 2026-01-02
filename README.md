<<<<<<< HEAD
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

AI Model Inventory Manager is a modern full-stack web application built with React.js, Express.js, MongoDB, and Firebase Authentication. The platform allows users to add, edit, and delete their own AI models, explore and purchase models from others, all within a secure, private-route environment.

--Users must be logged in to access private routes such as Add Model, My Models, and Purchased Models.

--Any model added by a user is automatically stored in their My Models page.

--Users can view details of other models and purchase them, which then appear in their Purchased Models page.

--Only the creator of a model can update or delete it, ensuring data integrity and ownership.

--All sensitive actions are secured on both frontend and backend using Firebase Authentication and token verification.

The platform simulates real-world AI model repositories like Hugging Face, Kaggle, and Model Zoo, providing hands-on experience in managing, categorizing, and securing AI models. This project demonstrates full-stack integration, real-time UI updates, and robust security, making it an excellent example for developers learning practical AI model management and secure web application development.

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
Databas
MongoDB Atlas
Hosting
Firebase Hosting (Client)
Vercel (Server)

---


<h4>📦 Dependencies (Client) :</h4>

📦 Main Dependencies--

Package Name
@tailwindcss/vite
firebase
framer-motion
lottie-react
react
react-dom
react-icons
react-loader-spinner
react-router
react-toastify
react-tsparticles
sweetalert2
tsparticles

🛠️ Dev Dependencies--
Package Name
@eslint/js
@types/react
@types/react-dom
@vitejs/plugin-react
daisyui
eslint
eslint-plugin-react-hooks
eslint-plugin-react-refresh
globals
postcss
tailwindcss
vite

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

🔗 **LinkedIn:** https://www.linkedin.com/in/monwar-hossan-himel/
=======
# 🧠 AI Model Inventory Manager

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge&logo=firebase)](https://ai-model-inventory-manag-45b01.web.app/)
[![Server API](https://img.shields.io/badge/Server-Vercel-black?style=for-the-badge&logo=vercel)](https://github.com/himel2535/ai-model-inventory-manager-server)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A professional, full-stack AI model repository and marketplace inspired by Hugging Face and Kaggle. This platform enables researchers and developers to catalog, explore, and purchase access to cutting-edge AI models.

## 🚀 Key Features

### 🏢 Advanced Dashboard System
A centralized management hub for authenticated users:
- **Dashboard Home**: Real-time analytics and performance charts.
- **My Profile**: Full profile management (Update Name, Avatar).
- **Inventory Management**: Securely Add, Update, and Delete your models.
- **Purchase History**: Track all acquired models in a dedicated view.

### 🔍 Dynamic Intelligence & Marketplace
- **Frontier Search**: Instant real-time search by model name.
- **Enhanced Filtering**: Categorize models by framework (TensorFlow, PyTorch, JAX, etc.).
- **Smart Sorting**: Order models by 'Newest Created' or 'Community Popularity'.
- **Skeleton Loaders**: Premium UI responsiveness using modern skeleton states.

### 🏠 Comprehensive Landing Experience
The home page features 10+ distinct sections designed for maximum conversion:
1. **Interactive Banner**: High-impact hero with smooth animations and CTA.
2. **Platform Stats**: Real-time metrics on community growth.
3. **Latest Models**: Showcasing the 4 most recent frontier models.
4. **Feature Showcase**: Detailed breakdown of platform capabilities.
5. **Trusted Reviews**: Testimonials from leading AI researchers.
6. **Smart FAQ**: Structured support for new users.
7. **About Mission**: Deep dive into our vision for AI democratization.
8. **Contact Center**: Professional lead generation and support form.
9. **Newsletter Hub**: Weekly AI research and model updates delivered to inbox.
10. **Get Started**: Clear path to community participation.

### 🔐 Enterprise-Grade Security
- **Firebase Authentication**: Secure Email/Password and Google Social Login.
- **JWT Protection**: Backend routes protected via secure token verification.
- **Role-Based Access**: Only creators can modify their own inventory.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React, Vite, Tailwind CSS, DaisyUI, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Auth & Security** | Firebase Auth, JWT |
| **Deployment** | Firebase Hosting (Client), Vercel (Server) |
| **Utilities** | React Icons, React Toastify, Axios |

---

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/himel2535/ai-model-inventory-manager-client.git
   cd ai-model-inventory-manager-client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add your Firebase configurations:
   ```env
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Developer Profile

**Monwar Hossan Himel**

- 📧 **Email**: [monwarhossanhimel@gmail.com](mailto:monwarhossanhimel@gmail.com)
- 🌐 **Portfolio**: [Visit Portfolio](https://himel-portfolio.web.app/)
- 💼 **LinkedIn**: [monwar-hossan-himel](https://www.linkedin.com/in/monwar-hossan-himel/)
- 🐙 **GitHub**: [@himel2535](https://github.com/himel2535)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
>>>>>>> 80927b4 (dashboard added)
