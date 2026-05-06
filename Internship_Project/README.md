# MERN Notes & Todo Productivity App

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) productivity application inspired by Google Keep, built as an internship project. This project helps users create, organize, update, and manage notes and tasks efficiently with an intuitive UI, checklist support, labels, and drag-and-drop task management.

---

#  Live Project (Add After Deployment)

## Frontend:
https://your-frontend-url.vercel.app

## Backend:
https://your-backend-url.onrender.com

---

#  Features

## 📝 Notes Management
- Create notes  
- Edit notes  
- Delete notes  
- Pin important notes  
- Archive notes  
- Add labels/tags  
- Color-coded notes  
- Checklist support  

## ✅ Todo Management
- Create tasks  
- Update tasks  
- Delete tasks  
- Mark task completion  
- Drag & Drop task organization  
- Dynamic task sorting  

##  Backend Features
- RESTful API architecture  
- MongoDB Atlas integration  
- Mongoose schema design  
- MVC folder structure  
- Environment variable security  
- CORS support  

---

#  Tech Stack

## Frontend:
- React.js  
- Axios  
- CSS / Custom Styling  
- React Hooks (useState, useEffect)  

## Backend:
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- Dotenv  
- CORS  

---

# 📂 Project Structure

```bash
Internship_Project/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── package.json
│
└── README.md

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository
```bash
git clone https://github.com/sathvikRep/Internship_Project/
cd Internship_Project

## 2️⃣ Backend Setup
cd backend
npm install
Create .env file inside backend folder:
PORT=5000
MONGO_URI=your_mongodb_connection_string
Run Backend Server:
npm start

## 3️⃣ Frontend Setup
cd frontend
npm install
npm start

# API Endpoints
Notes Routes:
GET     /api/notes
POST    /api/notes
PUT     /api/notes/:id
DELETE  /api/notes/:id

## Author
Sathvik
Internship Project – MERN Full Stack Development

## License
This project is for educational and internship purposes.

## Internship Project Highlight
Built a complete MERN productivity application from scratch with:
Backend APIs
MongoDB Database
Frontend UI
Notes + Todo Features
Drag & Drop
Deployment Ready
