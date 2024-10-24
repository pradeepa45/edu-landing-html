Here’s an updated `README.md` for your project based on the `package.json` and your setup:

---

# Edu Landing HTML

## Overview

This project is a landing page for educational purposes, built using HTML, CSS (Tailwind CSS), and JavaScript. It includes a Node.js server powered by Express, with Tailwind CSS for styling and Pug for templating.

## Tech Stack

- **HTML / CSS (Tailwind CSS)**
- **JavaScript**
- **Node.js (with Express)** for server-side functionality
- **Pug** for templating
- **Tailwind CSS** for styling
- **GSAP** for minor transition animations

## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** (>= 18.x.x)
- **npm** (>= 1.x.x)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/edu-landing-html.git
cd edu-landing-html
```

### 2. Install Dependencies

Install all the required dependencies using npm:

```bash
npm install
```

### 3. Build Tailwind CSS

Before running the development server, you'll need to build the CSS using Tailwind. Run the following command:

```bash
npm build:css
```

This will watch your `./public/index.css` file and output the processed Tailwind CSS to `./public/output.css`.

### 4. Start the Development Server

To run the development server, use the following command:

```bash
npm dev
```

This will start a server using **Nodemon**, which will automatically reload the server when changes are detected in `server.js`.

## Available Scripts

- `npm build:css`: Builds the Tailwind CSS file and watches for changes.
- `npm dev`: Starts the server using Nodemon, which reloads when changes are detected in the server.

## Folder Structure

```
edu-landing-html/
├── public/
|   ├── assets           # static images and svgs
|   ├── data             # data for the page to iterate on - steps, testimonials, etc
│   ├── index.css        # Main input CSS for Tailwind
│   ├── output.css       # Compiled Tailwind CSS
|   ├── carousels.js         # JavaScript for carousels
|   ├── button.js            # JavaScript for CTAs
|   ├── hero.js              # Javascript for hero section
├── views/
│   ├── index.pug        # Pug template for the landing page
├── server.js            # Node.js Express server
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## License

This project is licensed under the ISC License.

---
