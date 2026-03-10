# Technical Details 

A professional, responsive portfolio website designed to showcase web development projects. This project demonstrates clean semantic HTML, advanced CSS layouts (Flexbox/Media Queries), and dynamic JavaScript functionality.

---

## 🛠 Technical Details
This project focuses on clean code and modern web standards.

### 1. Persistent Dark Mode
The theme toggle isn't just a visual switch; it utilizes `localStorage`. When a user selects "Dark Mode," the state is saved in the browser.
* **Logic:** JavaScript checks the stored value on page load and applies the `.dark-theme` class to the `<body>` if necessary.

### 2. Time-Aware Greeting
The site features a dynamic greeting element created via DOM manipulation.
* **Logic:** The script uses the `Date()` object to fetch the current hour. It then uses conditional statements to inject "Good morning," "afternoon," or "evening" into the header.

### 3. Responsive Architecture
The layout adapts to different screen sizes using CSS Media Queries:
* **Desktop:** Uses `display: flex` with `justify-content: space-between` for a professional horizontal header.
* **Mobile ($< 768px$):** Switches to a vertical stack (`flex-direction: column`) to ensure readability on mobile devices in portrait orientation.

---

## 🌟 User Experience (UX)
The site is designed with a "User-First" mentality:

* **Visual Comfort:** The Dark Mode toggle provides high contrast for low-light environments, reducing eye strain.
* **Accessibility:** * Semantic tags like `<article>` and `<section>` assist screen readers.
    * Responsive images use `max-width: 100%` to prevent horizontal scrolling on small screens.
* **Interactivity:** The greeting provides a personalized feel immediately upon entry, making the site feel "alive" rather than static.
* **Form Usability:** The contact form uses clear `label` and `placeholder` associations to guide user input.