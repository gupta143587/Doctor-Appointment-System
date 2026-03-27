🏥 Doctor Appointment System
📌 Overview

The Doctor Appointment System is a web-based application designed to simplify the process of booking and managing medical appointments. It allows patients to register, log in, and book appointments with doctors, while doctors can manage appointments and suggest medicines.

This project demonstrates a structured frontend application integrated with a mock backend using JSON data to simulate real-world API behavior.

🚀 Features
👤 Patient Module
Patient Registration and Login
Book appointments with available doctors
Select services, date, and time
View appointment history
Check suggested medicines (if provided by doctor)
👨‍⚕️ Doctor Module
Doctor Registration and Login
View patient appointments
Add suggested medicines for appointments
Manage consultation details
💊 Medicine Management (Optional)
View list of medicines
Add medicines dynamically
Used for doctor suggestions
🛠️ Tech Stack
Frontend:
HTML5
CSS3 (Bootstrap)
JavaScript (Vanilla JS)
Backend (Mock):
JSON-based data (simulating database)
Can be run using JSON Server
📂 Project Structure

doctor-appointment-system/
│
├── index.html
├── scripts/
│ ├── patient-dashboard.js
│ ├── doctor-dashboard.js
│ └── other JS files
│
├── styles/
│ └── CSS files
│
├── views/
│ ├── patients/
│ ├── doctors/
│ └── shared/
│
├── backend/
│ └── db.json ← Mock backend data

🗄️ Backend Data

This project includes a mock backend file (db.json) which contains:

Users (Patients)
Doctors
Appointments
Medicines (optional)

The backend simulates real API endpoints using tools like JSON Server.

⚙️ How to Run the Project
Step 1: Run Backend (JSON Server)
json-server --watch db.json --port 3000
Step 2: Run Frontend
Open index.html in browser
🔗 API Endpoints (via JSON Server)
GET /users
GET /doctors
GET /appointments
POST /appointments
PUT /appointments/
🎯 Key Highlights
Modular folder structure
Role-based system (Patient & Doctor)
Dynamic UI updates using JavaScript
Simulated full-stack behavior using JSON backend
Easy to extend into a real backend (Node.js/Django)
📈 Future Enhancements
Integrate real backend (Node.js / Django)
Add authentication with JWT
Database integration (MongoDB/MySQL)
Payment integration
Notifications & reminders
👨‍💻 Author

Yogesh Gupta
B.Tech CSE (2025)
