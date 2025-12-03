
📸 Fotogram
A simple responsive photo gallery built with HTML, CSS and JavaScript
📖 Overview

Fotogram is a small web application created as part of my JavaScript learning journey.
The project demonstrates how to use:

Arrays

For-loops

Functions

DOM Manipulation

innerHTML

onclick Events

Event Delegation

Dialog elements

Keyboard navigation (← → ESC)

The goal was to build a fully functional image gallery with a detail view, while keeping the code
simple, structured, and aligned with the learning objectives of Module 6 – Einführung in JavaScript.

✨ Features
🖼️ Dynamic Image Gallery

Images are loaded into the gallery using:

an array containing all image paths

a for-loop

innerHTML with template literals

a helper function getImageHTML()

🔍 Dialog View

When clicking any image, a dialog opens and shows:

the large version of the image

the image filename as title

a counter (e.g., 5 / 12)

navigation arrows (previous / next)

⌨️ Keyboard Navigation

The dialog supports WCAG-friendly keyboard controls:

ArrowLeft → previous image

ArrowRight → next image

Escape → close dialog

📱 Responsive Design

grid layout adapts to screen width

gallery becomes 3-column layout on smaller screens

dialog adjusts size with max-height and overflow

🛠️ Technologies Used

HTML5 – structure

CSS3 – layout, grid, responsive styling

JavaScript (Vanilla) – logic and DOM updates

No external libraries or frameworks were used

📁 File Structure
Fotogram/
│
├── index.html
├── style.css
├── javascript.js
│
└── img/
      vogel.jpg
      biene.jpg
      kroete.jpg
      ...

🚀 How to Run

Download or clone the repository

Open the file index.html in your browser

No server required

Enjoy browsing your personal photo album 🎉

🎯 Learning Focus

This project demonstrates core JavaScript concepts from:

Arrays

For-loops

Functions

DOM Manipulation

Event handling

innerHTML

Using data-attributes

Simple component structure (helper functions)

No advanced methods like createElement, appendChild, querySelectorAll,
Array.from or complex DOM traversing were used in accordance with module instructions.

👤 Author

Created by Muhammed Kizmaz
📅 2025
🔗 GitHub: https://github.com/Migloabei
