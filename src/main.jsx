import "./index.css";
import App from "./App.jsx";
import { ViteReactSSG } from "vite-react-ssg/single-page";

export const createRoot = ViteReactSSG(
  <App />,
  ({ app, router, routes, isClient }) => {
    // Optional: This runs only in client (real browser)
    if (isClient) {
      console.log("App mounted on client");
    }
  }
);
