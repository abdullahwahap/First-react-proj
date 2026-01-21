# 📚 Book Management Application

A modern, responsive React application designed to help users manage their personal library.  
This app allows you to add, edit, delete, search, and sort books with persistent data storage.

---

## ✨ Features

- **Full CRUD Functionality**  
  Create, Read, Update, and Delete books seamlessly.

- **Persistent Storage**  
  Uses `localStorage` to ensure your book list is saved even after refreshing the browser.

- **Advanced Filtering & Sorting**
  - 🔍 **Search**: Real-time search by book name
  - 🔃 **Sort**: By Name, Author, Release Year, or Date Added

- **State Management**  
  Built using **React Context API** to avoid prop drilling and keep the code scalable.

- **Responsive UI**  
  Styled with **Tailwind CSS**, including custom themes and smooth transitions.

- **Form Validation**  
  Basic checks to ensure all book details are provided before saving.

---

## 🛠️ Tech Stack

- **Frontend**: React.js (Functional Components & Hooks)
- **Styling**: Tailwind CSS
- **State Management**: Context API
- **Build Tool**: Vite

---

## 🚀 Getting Started

Follow these steps to get a local copy up and running:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/book-management-app.git
```

### 2️⃣ Install dependencies
```
cd book-management-app
npm install
```
### 3️⃣ Run the application
```
npm run dev
```

The app will typically be available at:
👉 http://localhost:5173

📂 Project Structure
src/
├── components/
│   ├── BookForm.jsx      # Handles adding and editing book details
│   ├── BooksList.jsx     # Search, sort logic, and list rendering
│   └── BookItem.jsx      # UI component for individual book cards
├── App.jsx               # Main logic, State Provider, and layout
├── App.css               # Custom Tailwind layers and theme configuration
└── index.css             # Global styles

⚙️ Key Functionalities

Context API
BookContext in App.jsx centralizes the book state and exposes functions like
resetBook and setEditingId globally.

Performance Optimization
Uses useMemo in BooksList.jsx to optimize searching and sorting for large lists.

User Experience Enhancements

Smooth hover animations

Automatic scrolling (window.scrollTo) when editing a book

## ScreenShots (./src/ScreenShoots/*.png)

### Live Demo 
  https://my-first-react-projc.netlify.app/
