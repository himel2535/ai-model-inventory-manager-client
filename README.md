# AI Model Inventory Manager

A comprehensive full-stack application for managing, discovering, and trading AI models. This platform serves as a hub for AI researchers and developers to share their models, track performance via a leaderboard, and purchase premium models.

## ✨ Features

### 🔐 Authentication & Security
- **Secure Login/Signup**: Support for Email/Password and Google Social Login via Firebase.
- **Role-Based Access Control**:
  - **Admin**: Dedicated dashboard to manage all users, approve pending models, and oversee the platform.
  - **User**: Standard access to browse, purchase, and upload models.
- **JWT Protection**: Secured backend API routes using Firebase ID Tokens.

### 🤖 Model Management
- **Add Models**: Users can submit new AI models with details like name, framework, use case, and description.
- **Model Approval Workflow**: New models go to a "Pending" state for Admin approval before going live.
- **Edit/Delete**: Creators can update their model details or remove them.
- **Model Details**: Rich details page for each model.

### 🏆 Leaderboard & Gamification
- **Podium Design**: visually stunning top 3 ranking with "1st", "2nd", "3rd" podium stages.
- **Sales Tracking**: Models are ranked by purchaser count.
- **Top Contributors**: Recognition for users who upload the most high-quality models.

### 💰 Marketplace Features
- **Purchase System**: Users can "purchase" models (updates database purchase count).
- **My Purchases**: Dashboard view to track all acquired models.
- **My Models**: Dashboard view to manage personal submissions.

### 🎨 Modern UI/UX
- **Glassmorphism Design**: Sleek, modern interface with semi-transparent elements and backdrop blur.
- **Responsive Layout**: Fully optimized for Mobile, Tablet, and Desktop.
- **Theme System**: Toggable Dark/Light mode with persistence.
- **Animations**: Smooth transitions using Framer Motion (podium, hover effects).
- **Consistent Branding**: Unified "Cyan-to-Blue" gradient theme across the site.

### 📊 Additional Sections
- **Home Page**: Features "Latest Frontier Models", Testimonials, Stats, and FAQ.
- **Community**: Engagement sections for user feedback.
- **Profile Management**: Profile page with "Edit Profile" capability (Name, Photo).

## 🛠️ Technology Stack

### Frontend
- **React.js (Vite)**: Fast and modern frontend framework.
- **TailwindCSS**: Utility-first styling.
- **DaisyUI**: Component library for rapid UI development.
- **Framer Motion**: For complex animations (Leaderboard, Cards).
- **React Router**: Client-side routing.
- **Firebase Auth**: Authentication SDK.

### Backend
- **Node.js & Express.js**: Robust REST API.
- **MongoDB**: NoSQL database for flexible data storage.
- **JWT**: JSON Web Tokens for secure API communication.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB connection string
- Firebase Project configuration

### Installation

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/ai-model-inventory-manager.git
    cd ai-model-inventory-manager
    ```

2.  **Server Setup**
    ```bash
    cd ai-model-inventory-manager-server
    npm install
    # Create .env file with DB_USER, DB_PASS, etc.
    npm start
    ```

3.  **Client Setup**
    ```bash
    cd ../ai-model-inventory-manager-client
    npm install
    # Create .env file with VITE_API_URL and Firebase keys
    npm run dev
    ```

## 🌍 Environment Variables

**Client (.env)**
```env
VITE_API_URL=http://localhost:3000
VITE_apiKey=...
VITE_authDomain=...
VITE_projectId=...
VITE_storageBucket=...
VITE_messagingSenderId=...
VITE_appId=...
```

**Server (.env)**
```env
DB_USER=...
DB_PASS=...
ACCESS_TOKEN_SECRET=...
```


