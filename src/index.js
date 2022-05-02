import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

/**
 * Challenge: Start a brand new React app!
 * - Create a separate App component
 * - Import and render the App component here
 * - In the App component, render a <main> element
 * - Style everything to look like the slide
 */
