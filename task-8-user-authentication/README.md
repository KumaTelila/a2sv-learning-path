# Task 8: User Authentication with NextAuth

## Overview

This task involves implementing user authentication in your application using NextAuth. The goal is to create and style signup and sign-in pages and integrate these with the provided API endpoints for user registration and authentication. 

## Objectives

- Design and implement user signup and sign-in pages.
- Integrate authentication logic with the provided API endpoints using NextAuth.
- Ensure secure handling of user credentials and provide feedback on authentication status.

## Steps

### 1. Design Signup and Sign-In Pages

- **Create Separate Pages:** Develop two distinct components or pages:
  - **Signup Page:** For new user registration.
  - **Sign-In Page:** For existing users to log in.
  
- **Design Reference:** Follow the provided user interface as a guide, focusing on:
  - Layout consistency.
  - Form fields for user input (e.g., username, email, password).
  - Interactive elements such as buttons and error messages.

- **Usability and Accessibility:** Ensure that the design follows best practices for usability and accessibility, making it easy for all users to navigate and use.

### 2. Implement Signup Logic

- **API Integration:** 
  - Use the provided signup API endpoint.
  - Capture user input (e.g., username, email, password) from the signup form.
  - Send a POST request to the signup endpoint with this data.

- **Response Handling:**
  - Display error messages if the signup fails (e.g., username already taken, invalid email).
  - Show success notifications upon successful registration.

### 3. Implement Sign-In Logic

- **API Integration:**
  - Use the provided sign-in API endpoint.
  - Capture user input (e.g., email, password) from the sign-in form.
  - Send a POST request to the sign-in endpoint with this data.

- **Token Management:**
  - Retrieve the access token from the server upon successful authentication.
  - Securely store the token for future use (e.g., using cookies or local storage).

- **Error Handling:**
  - Provide feedback for authentication failures (e.g., incorrect password, user not found).
  - Ensure the application handles login errors gracefully, without exposing sensitive information.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KumaTelila/a2sv-learning-path.git
   cd a2sv-learning-path
   ```

2. **Navigate to the Task Path:**
   ```bash
   cd task-8-user-authentication
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Run the Application:**
   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **Next.js:** For building the application.
- **NextAuth.js:** For implementing authentication.
- **React:** For building user interfaces.
- **Tailwind CSS:** For styling the application.

## Screenshots

Below are some screenshots to illustrate the design and functionality of the authentication pages:

### Signup Page
![Signup Page Screenshot](demo-image/Screenshot%20from%202024-08-09%2008-40-50.png)

### Sign-In Page
![Sign-In Page Screenshot](demo-image/Screenshot%20from%202024-08-09%2008-40-07.png)

### OTP
![](demo-image/Screenshot%20from%202024-08-09%2008-41-23.png)


![](demo-image/Screenshot%20from%202024-08-09%2008-49-46.png)
