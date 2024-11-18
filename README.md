![image](https://github.com/user-attachments/assets/ede7ac94-084e-4ccb-9994-464b9029d1ce)

# Classic To-Do List

## 📋 About the Project

**Classic To-Do List** is an application developed as part of the **ReactJS** track challenge in the **Ignite** program by Rocketseat. This project aims to practice and reinforce key ReactJS concepts, including:

- **State management**
- **Immutability**
- **List handling**
- **Componentization**
- **Props in ReactJS**

The application is an interactive task manager that helps users organize their daily activities with essential task control functionalities.

---

## 🚀 Features

- **Add tasks**: Create new tasks and manage your to-do list.
- **Complete tasks**: Mark and unmark tasks as completed.
- **Delete tasks**: Remove tasks you no longer need.
- **Progress tracking**: Visually monitor your task completion progress.

---

## 🎨 Layout

The layout was designed in **Figma** and can be accessed via the link below. It is simple, intuitive, and responsive, providing a pleasant user experience.

🔗 [Access the Layout on Figma](https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate)

---

## 🛠️ Technologies and Tools

- **ReactJS**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Vite**: A modern frontend tool with Hot Module Replacement (HMR) support.
- **ESLint**: A tool for ensuring coding best practices.
- **CSS Modules**: Modular styling for reusable components.

---

## 🧩 Folder Structure

```plaintext
   classic-todo-list
   ┣ public
   ┃ ┗ vite.svg
   ┣ src
   ┃ ┣ assets
   ┃ ┃ ┣ android-chrome-192x192.png
   ┃ ┃ ┣ android-chrome-512x512.png
   ┃ ┃ ┣ apple-touch-icon.png
   ┃ ┃ ┣ Clipboard.png
   ┃ ┃ ┣ favicon-16x16.png
   ┃ ┃ ┣ favicon-32x32.png
   ┃ ┃ ┣ favicon.ico
   ┃ ┃ ┣ rocket-logo.svg
   ┃ ┃ ┣ site.webmanifest
   ┃ ┃ ┗ todo-logo.svg
   ┃ ┣ components
   ┃ ┃ ┣ Button
   ┃ ┃ ┃ ┣ Button.module.css
   ┃ ┃ ┃ ┗ index.tsx
   ┃ ┃ ┣ Counter
   ┃ ┃ ┃ ┣ Counter.module.css
   ┃ ┃ ┃ ┗ index.tsx
   ┃ ┃ ┣ CreateTask
   ┃ ┃ ┃ ┣ CreateTask.module.css
   ┃ ┃ ┃ ┗ index.tsx
   ┃ ┃ ┣ EmptyTask
   ┃ ┃ ┃ ┣ EmptyTask.module.css
   ┃ ┃ ┃ ┗ index.tsx
   ┃ ┃ ┣ Header
   ┃ ┃ ┃ ┣ Header.module.css
   ┃ ┃ ┃ ┗ index.tsx
   ┃ ┃ ┣ Input
   ┃ ┃ ┃ ┣ index.tsx
   ┃ ┃ ┃ ┗ Input.module.css
   ┃ ┃ ┣ Logo
   ┃ ┃ ┃ ┣ index.tsx
   ┃ ┃ ┃ ┗ Logo.module.css
   ┃ ┃ ┣ TaskInfo
   ┃ ┃ ┃ ┣ index.tsx
   ┃ ┃ ┃ ┗ TaskInfo.module.css
   ┃ ┃ ┣ TaskItem
   ┃ ┃ ┃ ┣ index.tsx
   ┃ ┃ ┃ ┗ TaskItem.module.css
   ┃ ┃ ┗ TaskList
   ┃ ┃ ┃ ┣ index.tsx
   ┃ ┃ ┃ ┗ TaskList.module.css
   ┃ ┣ hooks
   ┃ ┃ ┗ useHandleTasks.ts
   ┃ ┣ App.tsx
   ┃ ┣ global.css
   ┃ ┣ main.tsx
   ┃ ┗ vite-env.d.ts
   ┣ .gitignore
   ┣ eslint.config.js
   ┣ index.html
   ┣ package-lock.json
   ┣ package.json
   ┣ README.md
   ┣ tsconfig.app.json
   ┣ tsconfig.json
   ┣ tsconfig.node.json
   ┣ utility.css
   ┗ vite.config.ts
```

---

## 🚦 How to Run the Project

### Prerequisites

Ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/bruno-candia/classic-todo-list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd classic-todo-list
   ```
3. Install the dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
4. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
5. Open your browser and go to:
   ```
   http://localhost:5173
   ```

---

## ⚙️ ESLint Configuration

This project uses custom linting rules to maintain code consistency. Key configurations include:

- **Type-Aware Rules**: Rules based on TypeScript types.
- **React Plugin**: React-specific linting rules.

For further details, check the repository's guide on extending the ESLint configuration.

---

## 📢 Acknowledgments

**Developer:** Bruno Candia (update with your name if needed).  
📩 [**My LinkedIn**](https://www.linkedin.com/in/bruno-costa-candia/)
