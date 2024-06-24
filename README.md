<div align="center"><img src="./frontend/public/favicon.png" width="150px"></div>
<br />
<div align="center">
  <h1 align="center">Welcome on my Linktree</h1>
</div>

## Introduction

This repository contains the implementation of a frontend website that reproduce the macOS system. The idea behiend this project is to have a original way to show up how to reach me in the different platform!

## About my choice

## Frontend

### Pages

Below you'll find all the available navigation pages.

- `LandingPage`: The initial page that welcomes users to the site and show the avaible profile.
- `Profile`: Displays the desktop and the application bar of the various social media platforms.

### Components

Below you'll find all the components of the navigation pages.

- `LoadingPage`: Loading apple screen component.
- `Navbar`: A navigation bar that mimics the macOS system.
- `Finder`: A component that simulates the macOS Finder, allowing users to navigate different sections.
- `Bin` :A component that simulates the macOS Bin component.
- `Logout`: A logout component to end the session and go back to the LoadingPage.

## Backend

### Node

The backend of this project is implemented using Node.js, providing a robust and scalable server environment.

### Nodemailer

Nodemailer is used for handling email functionalities from the Email component in the bar applications, such as contact forms or notifications.

## Installation

To install this project locally, follow these steps:

1. Clone the repository: `https://github.com/samuelefrni/Linktree.git`
2. Navigate to the contracts folder: `cd backend`
3. Install the dependencies of the contracts folder: `npm install`
4. Create a .env file on the backend folder and in it create two variables
5. The first variable `PORT` is about the port you wanna use on your localhost
6. The second variable `USER` is about the email you wanna use with nodemailer
7. The third variable `PASS` is about the password you created for the nodemailer app
8. Run: `node server.js` to start the server
9. Navigate to the frontend folder
10. Install the dependencies of the frontend folder: `npm install`
11. Run the app with: `npm run dev`

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Author

- **Samuele Furnari**

  - Email: samuelefurnari9@gmail.com
  - GitHub: [samuelefrni](https://github.com/samuelefrni)
  - LinkedIn: [Samuele Furnari](https://www.linkedin.com/in/samuele-furnari-a37567220/)
