# UserTrack

UserTrack is a simple **CRUD (Create, Read, Update, Delete)** application built with **Node.js**, **Express**, **MongoDB**, and **EJS** templating.  
It allows you to manage users with their **name**, **username**, and **profile image**.

---

## 🚀 Features

- 📌 Create new users with name, username, and profile image.
- 📄 View all users in a clean, responsive interface (TailwindCSS).
- ✏️ Edit existing user details.
- 🗑️ Delete users.
- ❌ Prevents creating users with empty fields.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS, TailwindCSS
- **Database:** MongoDB (Mongoose)
- **Templating Engine:** EJS

---

## 📂 Project Structure

UserTrack/
├── models/
│ └── user.js
├── public/
│ └── stylesheets/
│ └── style.css
├── views/
│ ├── index.ejs
│ ├── read.ejs
│ ├── create.ejs
│ └── edit.ejs
├── app.js
└── package.json

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/UserTrack.git
   cd UserTrack
  
npm install

Setup MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

Create a .env file (optional) and set your MongoDB URI:
MONGO_URI=mongodb://localhost:27017/usertrack

Run the application
node app.js
nodemon app.js

Open in browser - http://localhost:3000

## 📸 Screenshots

## Home Page
<img width="1102" height="353" alt="image" src="https://github.com/user-attachments/assets/20ec160b-76ca-46fc-9c82-22450fc4466f" />

## User List
<img width="805" height="661" alt="image" src="https://github.com/user-attachments/assets/98b26aa3-8d2a-4ddf-965d-33f4e9e5ff42" />

## Edit Page
<img width="1138" height="274" alt="image" src="https://github.com/user-attachments/assets/62d8a37a-878e-4905-a688-9e3200ed86ba" />



