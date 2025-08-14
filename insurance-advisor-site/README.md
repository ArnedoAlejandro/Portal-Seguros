# Insurance Advisor Site

## Overview
This project is a professional and institutional website for an insurance advisor/producer in Argentina. The site is built using Vite, React, and Tailwind CSS, focusing on delivering a clean, modern, and responsive design that conveys trust and professionalism.

## Features
- **Responsive Design**: The site is fully responsive, ensuring a seamless experience across devices.
- **Hero Section**: Features a prominent hero section with the phrase “Protegé lo que más querés” and a call-to-action button “Cotizá tu seguro”.
- **Service Cards**: Displays main services offered, including Auto, Hogar, Vida, and Salud.
- **Contact Form**: A functional contact form for users to reach out, without backend integration at this stage.
- **Social Media Links**: Easy access to social media and WhatsApp in the footer.

## Project Structure
```
insurance-advisor-site
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets
│   │   └── [institutional-images-and-icons]
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ContactForm.jsx
│   └── pages
│       ├── Home.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Quote.jsx
│       ├── FAQ.jsx
│       └── Contact.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone [repository-url]
   cd insurance-advisor-site
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used
- **Vite**: A fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.

## Contribution
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License.