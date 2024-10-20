import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./assets/pages/signIn";
import SignUpPage from "./assets/pages/signUp";
import ErrorRoute from "./assets/pages/errorRoute";


const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
      errorElement: <ErrorRoute />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;