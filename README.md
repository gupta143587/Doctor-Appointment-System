# 🏥 Doctor Appointment System

## 📌 Overview

The Doctor Appointment System is a web-based application that allows patients to book appointments with doctors and enables doctors to manage appointments and suggest medicines.

This project demonstrates a structured frontend integrated with a mock backend using JSON Server to simulate real-world API interactions.

---

## 🚀 Features

### 👤 Patient Module

* Register and login functionality
* Book appointments with doctors
* Select services, date, and time
* View appointment details and status
* Check suggested medicines provided by doctors

### 👨‍⚕️ Doctor Module

* Doctor login functionality
* View all assigned appointments
* Add suggested medicines for patients
* Manage consultation details

### 💊 Medicine Management

* View available medicines
* Add medicines dynamically
* Used in doctor recommendations

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Styling:** Bootstrap
* **Backend (Mock):** JSON Server
* **Database:** JSON (db.json)

---

## 📂 Project Structure

```
Doctor-Appointment-System/
│
├── index.html
├── scripts/
├── styles/
├── views/
├── Backend/
│   └── db.json
├── README.md
```

---

## 🗄️ Backend Data

The project includes a mock backend file located at:

```
Backend/db.json
```

This file contains:

* Users (Patients)
* Doctors
* Appointments
* Medicines (optional)

It simulates real backend APIs using JSON Server.

---

## ⚙️ How to Run the Project

### ▶️ Run Backend (JSON Server)

```
json-server --watch Backend/db.json --port 3000
```

### 🌐 Run Frontend

* Open `index.html` in your browser

---

## 🔗 API Endpoints (JSON Server)

* GET /users
* GET /doctors
* GET /appointments
* POST /appointments
* PUT /appointments/:id

---

## 🎯 Key Highlights

* Clean and modular folder structure
* Role-based system (Patient & Doctor)
* Dynamic UI updates using JavaScript
* Simulated backend with REST API behavior
* Easy to extend into full-stack application

---

## 📈 Future Enhancements

* Integrate real backend (Node.js / Django)
* Add authentication (JWT)
* Connect to real database (MongoDB/MySQL)
* Payment integration
* Email/SMS notifications

---

## 👨‍💻 Author

**Yogeswara Gupta**
B.Tech CSE (2025)

---
