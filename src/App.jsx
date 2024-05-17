import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import Lesson15ControlledExamples from "./examples/lesson15/Lesson15ControlledExamples.jsx";
// import Lesson15exercise from "./exercises/lesson15/Lesson15Exercises.jsx";
// import RestaurantView from "./views/RestaurantView.jsx";

function App() {
  return <Lesson15ControlledExamples />;
  // return <Lesson15exercise />;
  // return <RestaurantView />;
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
