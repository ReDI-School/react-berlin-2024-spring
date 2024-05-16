import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import RestaurantView from "./views/RestaurantView.jsx";

function App() {
  return <RestaurantView />;
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
