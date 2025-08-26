import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Root from "./pages/Root";
import ProductDetails from "./pages/ProductDetails";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      {path:"/products/:id" , element:<ProductDetails/>}
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
