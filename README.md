# Kanban Board - Frontend Assignment

This project is a Kanban board application built with React JS that allows users to dynamically group and sort tickets based on status, user, or priority. The application interacts with an external API to fetch ticket data and provides users with a clean and responsive interface to manage tasks.

## 📑 Features

- Dynamic Grouping: Group tickets by status, user, or priority.
- Sorting Options: Sort tickets by priority (descending) or title (ascending).
- Responsive Design: Works across all devices with a visually appealing layout.
- API Integration: Fetches and displays real-time ticket data from the provided API.

### 📂 Project Structure

```
KANBAN-BOARD
├── node_modules        # Project dependencies
├── public              # Public assets like index.html
├── src
│   ├── components      # React components used across the app
│   │   ├── GroupingDropdown.js  # Dropdown for group options
│   │   ├── Header.js            # App header
│   │   ├── KanbanBoard.js       # Main Kanban board component
│   │   ├── SortingDropdown.js   # Dropdown for sort options
│   │   ├── TicketCard.js        # Component for each ticket card
│   │   ├── UsersList.js         # List of users in the sidebar
│   ├── icons            # Folder for all icons used in the app
│   ├── pages            # App pages
│   │   └── HomePage.js  # Main home page of the Kanban board
│   ├── services         # API service files
│   │   └── api.js       # Fetch data from the external API
│   ├── styles           # CSS stylesheets for components
│   │   ├── Header.css
│   │   ├── KanbanBoard.css
│   │   ├── TicketCard.css
│   │   ├── UsersList.css
│   ├── App.js           # Main app entry point
│   ├── App.css          # Global styles
│   └── index.js         # Entry point for React DOM rendering
├── .gitignore           # Files to ignore in Git
└── package.json         # Project dependencies and scripts
```

### 📦 API Integration
The application fetches ticket data from the following API:

API URL: https://api.quicksell.co/v1/internal/frontend-assignment

Data includes ticket title, priority, status, tags, and assigned users.

### 🛠️ How to Run the Project

# 1. Clone the repository:
```
git clone https://github.com/your-repo/kanban-board.git
```
# 2. Navigate into the project folder
```
cd kanban-board
```
# 3. Install dependencies:
```
npm install
```
# 4. Run the app:
```
npm start
```
![Screenshot 2024-10-23 122905](https://github.com/user-attachments/assets/5b66e1e6-ece8-4d5d-b8a4-fb3db1fbc964)


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
