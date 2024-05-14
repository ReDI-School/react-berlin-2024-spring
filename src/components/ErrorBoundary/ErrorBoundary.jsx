import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.error("Error caught by Error Boundary: ", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            background: "rgba(240,20,20,0.7)",
            height: "100vh",
            padding: "15px",
            color: "white",
          }}
        >
          <pre style={{ fontColor: "white" }}>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
