from pathlib import Path

readme_content = """# 🧑‍💼 Redux Employee Management Panel

A role-based employee management system built with **React**, **Redux**, and **Bootstrap**, featuring:

- Manager and employee login.
- Employee CRUD operations (by Manager).
- Task assignment and status.
- Salary breakdown.
- LocalStorage persistence.

## 🚀 Features

### 🔐 Authentication
- Simple login by name and role (Manager/Employee).
- Login data validated from `localStorage`.

### 👩‍💼 Manager Dashboard
- Add/Edit/Delete employees.
- Assign tasks to employees via modal form.
- View all employee details and tasks.

### 👷 Employee Page
- View own profile, department, role.
- View assigned tasks and their statuses.
- View salary breakdown (HRA, DA, TA, PF, etc.)

### 💾 Local Storage
- Employee data and logged-in user are stored in `localStorage` for persistence.
- Data remains after refresh unless cleared manually.

## 🛠️ Tech Stack

- **React** – UI Library
- **Redux Toolkit** – State management
- **React Router** – Navigation
- **Bootstrap 5** – Styling and layout
- **LocalStorage** – Data persistence

## 🏗️ Project Structure

```bash
src/
│
├── components/          # Sidebar, Navbar, Footer components
├── pages/               # Main pages (Dashboard, EmployeeForm, EmployeePage, Task, Salary)
├── redux/
│   ├── store.js         # Redux store setup
│   └── employeeSlice.js # Reducers and actions for employees
├── App.js               # Main route manager
├── index.js             # React entry point
└── Login.js             # Login screen
