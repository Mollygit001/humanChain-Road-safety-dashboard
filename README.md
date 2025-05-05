# 🤖HUMANCHAIN

HUMANCHAIN is a modern React application for reporting and managing incidents, with dynamic theming, routing, and smooth animations.

## 📦Installation

Use [npm](https://www.npmjs.com/) to install and run HUMANCHAIN locally.

```bash
# Clone the repository
git clone https://github.com/Mollygit001/humanChain-Road-safety-dashboard.git
cd humanChain-Road-safety-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🧑‍💼Usage

Visit [http://localhost:5173](http://localhost:5173) in your browser to view the application.

To build for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

To lint and check code quality:

```bash
npm run lint
```

## 🚀Tech Stack

- React 19
- Vite 6
- TailwindCSS 4
- Framer Motion 12
- React Router DOM 7
- date-fns 4

## 🏪Project Structure

```plaintext
src/
 ├── components/
 │    ├── theme/
 |    |     └──ThemeProvider.jsx
 |    |     └──ThemeProvider.jsx
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
 │    └── date.js
 ├── App.jsx
 ├── index.css
 ├── main.jsx
```

## 💡Design Decisions and Challenges
Component Reusability: Separated concerns into individual components (like IncidentCard, IncidentList) to maximize reusability and scalability.

Theme Management: A ThemeProvider and ThemeToggle were implemented to allow dynamic theme switching.

Mock Data: Used mock data during early development (mock/mockData.js) to simulate real-world scenarios without backend dependency.

Routing: Simple and clean client-side routing with react-router-dom, handling 404s with a NotFound.jsx page.

Animation: Smooth UI transitions using Framer Motion to enhance user experience without overloading performance.

Challenges: TailwindCSS v4 introduced a few breaking changes from v3, requiring careful migration, especially around utility classes and plugins.

## ✨Contributing

Pull requests are welcome.  
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests and documentation as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
