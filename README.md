
# Paytm-Wallet

## Features

- 🧑‍💻 **User Registration and Login**: Users can register and log in to the application.
- 📊 **Responsive Dashboard**: A modern and responsive UI built with React for displaying wallet information.
- 🔒 **Secure Password Handling**: Implement secure password management practices.
- 🌐 **Cross-Origin Resource Sharing (CORS)**: Enabled for seamless interaction between the front-end and back-end.

## Technologies Used

- 🎨 **Frontend**: React, Tailwind CSS
- 🖥️ **Backend**: Node.js, Express
- 🗄️ **Database**: MongoDB

## Getting Started

### Prerequisites

- 📦 **Node.js** (>=14.x)
- 🍃 **MongoDB** (>=4.x)
- 📦 **npm** (Node Package Manager)

### Installation

#### 1. Clone the repository:
   ```bash
   git clone https://github.com/Dev-Hariprasath/Paytm-Wallet.git
   cd EdunetProjects/User Login/Week1
   ```

### 2. Install Dependencies


#### Backend (JWT Auth)
Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

Install the backend dependencies:
   ```bash
   npm install
   ```

The main backend dependencies include:
- 🛠️ **express**: For building the API.
- 🍃 **mongoose**: For MongoDB interaction.
- 🔒 **bcrypt**: For password hashing.
- 🌍 **cors**: For enabling CORS.
- ✅ **express-validator**: For request validation.

#### Frontend (JWT Auth)
Navigate to the `frontent` folder:
   ```bash
   cd frontend
   ```

Install the frontend dependencies:
   ```bash
   npm install
   ```

The main frontend dependencies include:
- ⚛️ **react**: For building the UI.
- 🌐 **axios**: For making HTTP requests.
- 🧭 **react-router-dom**: For handling routing in React.
- 🎨 **tailwindcss**: For styling the frontend.

### 3. Set Up Environment Variables

#### Backend (JWT Auth)
In the `backend` folder, create a `.env` file and add your MongoDB URI and other necessary environment variables:

```
MONGO_URI=mongodb://127.0.0.1:27017/user
PORT=8000
```

### 4. Running the Application

#### Backend (JWT Auth)
To run the backend server, navigate to the `backend` folder and run:
   ```bash
   node index.js
   ```

#### Frontend (JWT Auth)
To run the frontend application, navigate to the `frontend` folder and run:
   ```bash
   npm start
   ```

The frontend will run on `http://localhost:3000`, and the backend will be accessible via `http://localhost:5000`.
