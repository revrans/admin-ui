import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./assets/pages/signIn";
import SignUpPage from "./assets/pages/signUp";
import ForgotPassPage from "./assets/pages/forgotPass";
import ErrorRoute from "./assets/pages/errorRoute";
import DashboardPage from "./assets/pages/Dashboard";
import BalancePage from "./assets/pages/balance";


const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
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
    {
      path: "/forgotpass",
      element: <ForgotPassPage />,
    },
    {
      path: "/balance",
      element: <BalancePage/>,
    } 
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;