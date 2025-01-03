import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  // Correct import for React 18
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
