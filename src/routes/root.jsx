import { Outlet } from "react-router-dom";
import "./root.css";
import { useQuery } from "@apollo/client";
import { AUTH_TOKEN } from "../Lib/constants";
import { whoami } from "../Lib/queries";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Components/Common";

export default function Root() {
  const navigate = useNavigate();

  const token = localStorage.getItem(AUTH_TOKEN);

  const { loading, error, data } = useQuery(whoami, { variables: { t: token } });

  if (loading) return <p id="loading"></p>;
  if (error) {
    localStorage.removeItem(AUTH_TOKEN);
    navigate("/");
    window.location.reload(false);
  };
  
  const logout = () => {
    navigate("/")
    localStorage.removeItem(AUTH_TOKEN)
    window.location.reload(false)
  };
  const style = {
    body: {
      backgroundColor: "rgba(120, 120, 120, 0.3)",
        backdropFilter: 'blur(20px)',
        height: "100vh",
        width: "100vw",
    },
  };
  
  return (
      <>
        <div style={style.body} id="root">
          <div id="sidebar">
            <h1>Made by El Mahdi Aboulmanadel & Ismail El Iraqi.</h1>
            <div id="title">
              <Logo size="1.6em" />
              <span onClick={logout} id="logout">Logout</span>
              <p id="hello">Hello, {data.whoami.firstName} {data.whoami.lastName}</p>
            </div>
            <nav>
              <ul>
                <li>
                  <a href={`/`}>Dashboard</a>
                </li>
                <li>
                  <a href={`drivers`}>Drivers</a>
                </li>
                <li>
                  <a href={`vehicles`}>Vehicles</a>
                </li>
                <li>
                  <a href={`trips`}>Trips</a>
                </li>
                <li>
                  <a href={`clients`}>Clients</a>
                </li>
              </ul>
            </nav>
          </div>
          <div id="detail">
            <Outlet />
          </div>
        </div>
      </>
    );
  }
  