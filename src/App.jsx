import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import { Lesson16Example } from "./examples/lesson16/Lesson16Example.jsx";
import Lesson16Exercise from "./exercises/lesson16/Lesson16Exercise.jsx";
import RestaurantView from "./views/RestaurantView.jsx";

function App() {
   //return <Lesson16Example />;
   //return <Lesson16Exercise />;
   return <RestaurantView />;
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
