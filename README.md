
🔐 PassOp — MERN Password Manager

A full-stack password manager built while learning the MERN stack (MongoDB, Express, React, Node.js) through Code With Harry's web development course. This project covers complete CRUD functionality connected to a real database.


⚠️ Note: This is a learning project and does not yet have user authentication. Passwords are stored in a shared local MongoDB collection — not intended for production/real use yet. Auth is planned as a future addition.



Screenshot
<img width="1918" height="1051" alt="image" src="https://github.com/user-attachments/assets/415d99bc-6c98-4398-ad8b-b3841884a4cd" />

Features


➕ Add new password entries (site, username, password)
📋 View all saved passwords in a clean table layout
📝 Edit existing entries
🗑️ Delete entries with confirmation
📎 Copy to clipboard for site, username, or password with one click
👁️ Show/hide password toggle
🔔 Toast notifications on copy actions


Tech Stack

Frontend


React (Vite)
Tailwind CSS
react-toastify — toast notifications
lord-icon — animated icons


Backend


Node.js
Express.js
MongoDB (local instance) via the native mongodb driver
cors — enable frontend-backend communication across origins
dotenv — environment variable management


Project Structure

passop-mongodb/
├── backend/
│   ├── server.js          # Express server & API routes
│   ├── .env                # MongoDB connection (not committed)
│   └── package.json
├── src/
│   ├── assets/components/
│   │   ├── Manager.jsx     # Main app logic & UI
│   │   ├── Navbar.jsx
│   │   └── PassList.jsx
│   └── App.jsx
└── package.json

API Endpoints

MethodRouteDescriptionGET/Fetch all saved passwordsPOST/Save a new password entryDELETE/Delete a password entry by _id

Running Locally

1. Clone the repo

bashgit clone https://github.com/APURVCODER/password-manager-mern.git
cd password-manager-mern

2. Backend setup

bashcd backend
npm install

Create a .env file in backend/ with:

MONGO_URI=mongodb://localhost:27017

Make sure MongoDB is running locally, then:

bashnode --watch server.js

3. Frontend setup (in a new terminal, from project root)

bashnpm install
npm run dev

The app will be running at http://localhost:5173, with the backend at http://localhost:3000.

What I Learned

Building this project (and debugging it from scratch) helped me actually understand:


The difference between MongoDB's _id and self-generated IDs, and why mixing the two breaks delete/update logic
Why unhandled errors in async route handlers can crash an Express server, and the importance of try/catch
CORS and why frontend-backend communication fails without it
The full request lifecycle: frontend fetch() → Express route → MongoDB → response → UI update


Planned Improvements


 User authentication (signup/login) so passwords are private per user
 Password encryption at rest
 Deployment (frontend + backend + cloud MongoDB)


Acknowledgements

Built while following Code With Harry's MERN stack course, with additional debugging, fixes, and concept reinforcement done independently.
