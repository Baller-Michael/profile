import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CambridgeLandingPage from "./cambridge/CambridgeLandingPage";
import CambridgeStakeholderPages from "./cambridge/CambridgeStakeholderPages";
import WisconsinLandingPage from "./wisconsin/WisconsinLandingPage";
import WisconsinStakeholderPages from "./wisconsin/WisconsinStakeholderPages";
import MyProfile from "./MyProfile";
import "./App.css";
import "./wisconsin/WisconsinLandingPage.scss";
import "./cambridge/CambridgeLandingPage.scss";
import "./wisconsin/WisconsinFooter.scss";
import "./wisconsin/WisconsinStakeholderPages.scss";
import "./wisconsin/WisconsinStakeholderTopSection.scss";
import "./CustomerCommunities.scss";
import "./CustomerFAQs.scss";
import "./CustomerKeyFeatures.scss";
import "./CustomerWhatWeDo.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/profile/",
      element: <MyProfile />,
    },
    {
      path: "/profile/cam",
      element: <CambridgeLandingPage />,
    },
    {
      path: "/profile/cam/:activePage",
      element: <CambridgeStakeholderPages />,
    },
    {
      path: "/profile/uwmadison-cals",
      element: <WisconsinLandingPage />,
    },
    {
      path: "/profile/uwmadison-cals/:activePage",
      element: <WisconsinStakeholderPages />,
    },
  ]);

  return (
    <>
    <div className='my-profile'>
      <nav className="navigation">
        <div className="page-container">
          {/* <div className="logo">
            <a href="#home"><img src="./public/logo.png" alt="Michael Pavelchuk logo" className="mp-logo"/></a>
          </div> */}
          <ul className="navigation-list" id="navigation">
            <li className="nav-item">
              <a className="nav-link" href="/profile/">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/cam">
                Cambridge
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile/uwmadison-cals">
                Wisconsin
              </a>
            </li>
          </ul>
        </div>
      </nav></div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
