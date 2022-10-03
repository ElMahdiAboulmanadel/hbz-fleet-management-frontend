import './App.css';
import Login from './Components/Login/Login';
import { Routes, createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { ApolloProvider } from "@apollo/client";
import client from "./Lib/apolloClient";
import { AUTH_TOKEN } from './Lib/constants';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Clients from './Components/Dashboard/Clients';
import Drivers from './Components/Dashboard/Drivers';
import Trips from './Components/Dashboard/Trips';
import Vehicles from './Components/Dashboard/Vehicles';
import 'reactjs-popup/dist/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "drivers",
        element: <Drivers />,
      },
      {
        path: "vehicles",
        element: <Vehicles />,
      },
      {
        path: "trips",
        element: <Trips />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
    ],
  },
]);

const authToken = localStorage.getItem(AUTH_TOKEN);

function App() {
  return (
    <ApolloProvider client={client}>
      
        { (!authToken) ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
            </Routes>
          </BrowserRouter>) : (
          <RouterProvider router={router}/>
        )}

    </ApolloProvider>
  );
}

export default App;
