# Technical Details

A professional, responsive portfolio website designed to showcase web development projects.  
This project demonstrates clean semantic HTML, advanced CSS layouts (Flexbox/Media Queries), dynamic JavaScript functionality, and interactive user enhancements.

---

## 🛠 Technical Details

This project focuses on clean code, modular logic, and modern web standards.

### 1. Persistent Dark Mode ⚪
The theme toggle uses `localStorage` to remember user preference.
* **Logic:** On page load, JavaScript checks `localStorage`. If `"dark"` is stored, it applies the `.dark-theme` class to `<body>`.  
* **Toggle Behavior:** Clicking the button flips between light and dark themes and updates the stored value.

### 2. Time-Aware Greeting ⚪
A personalized greeting displays based on the user's local time.
* **Logic:** `Date().getHours()` is used to determine morning, afternoon, or evening. A `<p>` element is dynamically created and inserted at the top of the header.

### 3. Responsive Architecture ⚪
Layout adjusts for multiple screen sizes:
* **Desktop:** Flexbox with `justify-content: space-between` for a horizontal header.  
* **Mobile (< 768px):** `flex-direction: column` with stacked content for portrait orientation.  
* **Images:** `max-width: 100%` and fixed height to prevent overflow.

### 4. Section Filters 🆕
Users can filter project cards by category using interactive buttons.
* **Logic:** Buttons are linked to project categories via `data-attributes`.  
* **Implementation:**  
  * Clicking a button triggers an event listener.  
  * JavaScript iterates over all project cards and toggles their visibility using `.style.display`.

### 5. Interactive Hover Effects 🆕
Subtle animations provide feedback for buttons and project cards.
* **Logic:** CSS `transform`, `box-shadow`, and transitions are applied on `:hover`.  
* **UX Benefit:** Improves perceived responsiveness and guides user interactions.

### 6. Layout Stability 🆕
Hovering project cards no longer disrupts adjacent elements.
* **Logic:** Minor `translateY` and `box-shadow` changes ensure elements don’t overlap or move the layout unexpectedly.  
* **UX Benefit:** Smooth, stable interactions enhance professionalism and readability.

### 7. Responsive Design ⚪
Ensures usability across devices with the new interactive features.
* **Logic:** Media queries and flexbox adjustments maintain readability and interactive accessibility.  
* **UX Benefit:** Users on tablets, phones, and desktops receive a consistent and optimized experience.

---

## 🌟 User Experience (UX)

The site is designed with a **user-first mentality**:

* **Visual Comfort:** Dark Mode toggle improves readability in low-light environments. ⚪  
* **Accessibility:** Semantic tags (`<article>`, `<section>`) support screen readers; form labels are properly linked. ⚪  
* **Interactivity:** Hover effects make the site feel dynamic and engaging. 🆕  
* **Usability:** Section filters provide intuitive project exploration without page reloads. 🆕  
* **Consistency:** Layout adjustments prevent content overlap, maintaining visual stability across devices. 🆕