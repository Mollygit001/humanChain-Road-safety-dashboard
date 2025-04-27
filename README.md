HUMANCHAIN
A modern web application for reporting and managing incidents, built with React 19, Vite, Tailwind CSS 4, and Framer Motion.

🚀 Tech Stack
Frontend Framework: React 19

Build Tool: Vite 6

Styling: Tailwind CSS 4 + tailwindcss-animate

Routing: React Router DOM 7

Animations: Framer Motion 12

Utilities: date-fns 4

📦 Installation and Setup Instructions
Follow these steps to run the project locally:

Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/humanchain.git
cd humanchain
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build
Preview the production build locally:

bash
Copy
Edit
npm run preview
Lint the codebase:

bash
Copy
Edit
npm run lint
The app will be available at http://localhost:5173 by default after running the development server.

🧩 Project Structure
plaintext
Copy
Edit
src/
 ├── components/
 │    ├── theme/
 │    │     ├── ThemeProvider.jsx
 │    │     └── ThemeToggle.jsx
 │    ├── IncidentCard.jsx
 │    ├── IncidentControls.jsx
 │    ├── IncidentDashboard.jsx
 │    ├── IncidentList.jsx
 │    └── ReportIncidentForm.jsx
 ├── hooks/
 │    └── useIncidents.js
 ├── mock/
 │    └── mockData.js
 ├── pages/
 │    ├── Index.jsx
 │    └── NotFound.jsx
 ├── utils/
 │    ├── date.js
 ├── App.jsx
 ├── index.css
 ├── main.jsx
✨ Design Decisions and Challenges
Component Reusability: Separated concerns into individual components (like IncidentCard, IncidentList) to maximize reusability and scalability.

Theme Management: A ThemeProvider and ThemeToggle were implemented to allow dynamic theme switching.

Mock Data: Used mock data during early development (mock/mockData.js) to simulate real-world scenarios without backend dependency.

Routing: Simple and clean client-side routing with react-router-dom, handling 404s with a NotFound.jsx page.

Animation: Smooth UI transitions using Framer Motion to enhance user experience without overloading performance.

Challenges: TailwindCSS v4 introduced a few breaking changes from v3, requiring careful migration, especially around utility classes and plugins.

📄 License
This project is licensed under the MIT License.
Feel free to fork and build upon it!