# 📝 Blogging Web Application

A modern full-stack blogging platform built with **React**, featuring **two backend implementations**:

- ✅ **Custom Backend** using Node.js, Express, and MongoDB (separate repository)
- 🗂 **Legacy Appwrite (BaaS) Version** (branch-based)

This project demonstrates a real-world migration from **Backend-as-a-Service (Appwrite)** to a **fully custom backend architecture** for greater control, scalability, and learning depth.

---

## 🚀 Features

- User authentication & authorization  
- Create, edit, delete, and view blog posts  
- Image upload for blog posts  
- Rich text editor for content creation  
- Secure session handling (JWT & cookies)  
- Responsive and modern UI  

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5, CSS3
- Tailwind CSS
- Redux Toolkit

### Backend (Current – Separate Repository)
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Multer (file uploads)
- Cloudinary (image storage)

### Backend (Legacy – Appwrite Version)
- Appwrite Authentication
- Appwrite Database
- Appwrite Storage

---

## 🌱 Project Repositories & Branches

### 📌 Frontend Repository (this repo)
https://github.com/Sar-t/Blog-Web-Application-main

shell
Copy code

### 📌 Backend Repository (Custom Backend)
https://github.com/Sar-t/BlogBackend

csharp
Copy code

### 📌 Legacy Appwrite Version
Available as a branch inside the frontend repository:

git checkout appwrite-backend
📂 Frontend Project Structure
php
Copy code
├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│   ├── appwrite/   # used only in appwrite-backend branch
│   └── main.jsx
├── public/
├── README.md
⚠️ Note: Backend code is intentionally maintained in a separate repository
for cleaner architecture, independent scaling, and easier deployment.

⚙️ Installation & Setup (Frontend)
1️⃣ Clone the frontend repository
bash
Copy code
git clone https://github.com/Sar-t/Blog-Web-Application-main.git
cd Blog-Web-Application-main
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Configure environment variables
Create a .env file in the root directory:

env
Copy code
VITE_API_BASE_URL=http://localhost:5000
4️⃣ Start the development server
bash
Copy code
npm run dev
🔗 Backend Setup
Please refer to the backend repository for complete backend setup instructions:

arduino
Copy code
https://github.com/Sar-t/BlogBackend
🧪 Usage
Register or log in

Create and manage blog posts

Upload featured images

Edit or delete your own posts

Read blogs in a clean, responsive interface

🧠 Learning Highlights
Migrated backend from Appwrite (BaaS) to a custom Node.js backend

Implemented secure JWT-based authentication

Designed RESTful APIs

Managed file uploads and cloud-based media storage

Used Redux for global state management

🔮 Future Enhancements
Comment system

Likes & bookmarks

Tags and categories

Author profile pages

Search and filtering

👨‍💻 Author
Sarthak Tomar
Full-Stack Web Developer
