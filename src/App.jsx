import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import DataFetch from "./examples/lesson13/DataFetch.jsx";
import DataFetch2 from "./examples/lesson13/DataFetch2.jsx";
import Lesson14Example from "./examples/lesson14/Lesson14Example.jsx";
import Lesson14Exercise from "./exercises/lesson14/Lesson14Exercise.jsx";
import RestaurantView from "./views/RestaurantView.jsx";

function App() {
  return <Lesson14Example />;
  // return <Lesson14Exercise />;
  // return <RestaurantView />;
}

// Wrap App in an ErrorBoundary to help us with development bugs

export default function WrappedApp(){
  return import.meta.env.MODE === "development" ? (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ) : (
    <App />
  );
}
