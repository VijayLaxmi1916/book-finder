# 📚 Book Finder

A **React (Vite) frontend-only project** built as part of the Take-Home UI Challenge.  
This application lets users search books by title using the [Open Library Search API](https://openlibrary.org/dev/docs/api/search).

---

## ✨ Features

- 🔍 **Search** books by title
- 🖼️ Shows **cover, title, author(s), publish year**
- 🎯 **Filters**: by author, by year
- 📊 **Sorting**: by relevance (default), by year ↑↓, by title A→Z
- 📱 **Responsive UI** (works on mobile & desktop)
- ⚡ Built with **React + Vite**, no backend required
- ✅ Graceful handling of loading, network errors, and empty states

---

## 🚀 Live Deployment (CodeSandbox)

1. Go to [CodeSandbox](https://codesandbox.io/).
2. Click **Create Sandbox → Import from ZIP**.
3. Upload the provided `book-finder-react.zip`.
4. Wait for it to install dependencies automatically.
5. Click **Run/Preview** → you’ll get a live shareable URL.

---

## 🛠️ Run Locally

```bash
# Unzip and enter project
unzip book-finder-react.zip
cd book-finder-react

# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173 in browser
```

---

## 📦 Tech Stack

- **React 18**
- **Vite** (build tool)
- **Vanilla CSS** (custom responsive design)
- **Open Library API**

---

## 👩‍💻 User Story (from challenge)

- **Persona**: Alex (college student)
- **Need**: Wants to search books quickly and intuitively
- **Solution**: Book Finder app with clean, minimal UI, responsive design, and helpful filters/sorting.

---

## 📷 Screenshots

### Desktop View
*(after searching “Harry Potter”)*  
![Desktop Screenshot](https://via.placeholder.com/800x400?text=Book+Finder+Desktop)

### Mobile View
*(responsive grid adapts to smaller screens)*  
![Mobile Screenshot](https://via.placeholder.com/400x700?text=Book+Finder+Mobile)

---

## 📑 Notes

- This is a **frontend-only** application.  
- Data comes from the free **Open Library API** (no authentication required).  
- Covers may not always exist → fallback placeholder image is shown.  

---

### ✅ Submission Checklist

- [x] Working app (React + Open Library API)
- [x] Clear, responsive UI
- [x] Filters & sorting
- [x] Error/empty state handling
- [x] Deployment-ready (CodeSandbox / local run)
- [x] Documentation (README)

---

🔗 **Powered by [Open Library](https://openlibrary.org/)**

