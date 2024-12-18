import SignInPage from "./pages/signmasuk";
import SignUpPage from "./pages/signdaftar";
import ErrorRoute from "./pages/errorRoute";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotpwPage from "./pages/forgotpw";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import GoalPage from "./pages/goal";

// up
const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
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
      path: "/forgotpw",
      element: <ForgotpwPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
    {
      path: "/expenses",
      element: <ExpensesPage />,
    },
    {
      path: "/goal",
      element: <GoalPage />,
    },

  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
