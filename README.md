# Todo List App

## Overview
This Todo List App is a simple yet powerful application that allows users to manage their daily tasks efficiently. With features like adding, updating, and deleting tasks, users can easily organize their to-do lists and stay productive.

## Features
- Add new tasks with due dates
- Mark tasks as completed
- Edit existing tasks
- Delete unwanted tasks
- Update existing tasks
- Real-time updates using Firestore database
- Intuitive user interface for easy task management
- **Code Organization**: The codebase is organized into separate files and folders based on functionality, promoting code readability and maintainability.

## Implementation Choices
- **Firestore Database**: Firestore was chosen for its real-time database capabilities, enabling seamless updates across multiple clients.
- **React.js**: React.js was used for building the frontend due to its component-based architecture, which promotes code reusability and maintainability.
- **Material-UI**: Material-UI was utilized for its pre-designed React components and theming capabilities, allowing for rapid prototyping and consistent styling.

## How to Run Locally
1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Set up a Firestore database in your Firebase project.
4. Update the Firebase configuration in `firebase.js` with your own credentials.
5. Start the development server using `npm start`.
6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Challenges Faced
- **Integration with Firestore**: While Firestore offers powerful real-time database capabilities, integrating it with the frontend posed some initial challenges. Understanding the Firestore data model, setting up proper security rules, and configuring real-time listeners required thorough documentation review and experimentation.
- **Editing Tasks**: Implementing the editing feature posed a challenge, particularly handling the transition between the view mode and edit mode seamlessly. This was resolved by using state management to toggle between the two modes and updating the task data accordingly.


