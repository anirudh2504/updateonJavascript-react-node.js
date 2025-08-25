import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
        <Home />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Dashboard />
        <Home />
      </div>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <NavBar/>
    </>
  );
}

export default App;
