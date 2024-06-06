import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import MenuItemDetails from "./components/MenuItem/MenuItemDetails.jsx";
import RestaurantView from "./views/RestaurantView.jsx";
//import Lesson17Example from "./examples/lesson17/Lesson17Example.jsx";
//import Lesson17Exercise from "./exercises/lesson17/Lesson17Exercise.jsx";
import ProjectDeploy from "./views/ProjectDeploy.jsx";

import "./App.css";

function App() {
  return <ProjectDeploy />;
  // return <Lesson17Example />
  // return <Lesson17Exercise />
  return (
    <Router>
      <Routes>
        <Route index element={<RestaurantView />} />
        <Route path="/meals/:id" element={<MenuItemDetails />} />
        <Route path="/*" element={<p>404 Page not found</p>} />
      </Routes>
    </Router>
  );
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp() {
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  );
}
