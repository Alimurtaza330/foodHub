# Food Order Application

This is a full-stack food order application built with the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse food items, add them to their cart, and place orders. It includes user authentication, cart management, and order handling features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
  - [Frontend Scripts](#frontend-scripts)
  - [Backend Scripts](#backend-scripts)
- [License](#license)



## Features
- User authentication (signup, login, and logout)
- Browse and search food items
- Add items to the cart
- Update cart items (quantity, size)
- Remove items from the cart
- Place orders and view order history

## Technologies Used
### Frontend
- React
- React Bootstrap
- React Router DOM
- Bootstrap
- Bootstrap Dark Mode

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- bcryptjs
- cors
- express-validator
- jsonwebtoken

## Getting Started
To get a local copy up and running, follow these steps.

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Frontend Setup
1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/food-order-app.git
    cd food-order-app/frontend
    ```
2. Install NPM packages
    ```bash
    npm install
    ```
3. Start the React development server
    ```bash
    npm start
    ```

### Backend Setup
1. Navigate to the backend directory
    ```bash
    cd ../backend
    ```
2. Install NPM packages
    ```bash
    npm install
    ```
3. Start the Node.js server
    ```bash
    node index.js
    ```


## Project Structure
### Frontend
```plaintext
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Body.jsx
│   │   ├── Carousel.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── Overlay.jsx
│   └── Reducer.js
├── package.json
└── .gitignore

### Backend
backend/
├── model/
│   ├── OrderDetail.js
│   └── User.js
├── routes/
│   ├── searchFood.js
│   ├── orderData.js
│   ├── displayData.js
│   └── createUser.js
├── db.js
├── fetchData.js
├── index.js
├── package.json
└── .gitignore

### Available Scripts
Frontend Scripts
- npm start: Runs the app in the development mode.
- npm run build: Builds the app for production to the build folder.
- npm test: Launches the test runner in the interactive watch mode.
- npm run eject: Ejects the app (use with caution).
### Backend Scripts
- node index.js: Starts the Node.js server.
