import {
  Link,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import CambridgeLandingPage from "./cambridge/CambridgeLandingPage";
import "./cambridge/CambridgeLandingPage.scss";
import CambridgeStakeholderPages from "./cambridge/CambridgeStakeholderPages";
import "./CustomerCommunities.scss";
import "./CustomerFAQs.scss";
import "./CustomerKeyFeatures.scss";
import "./CustomerWhatWeDo.scss";
import MyProfile from "./MyProfile";
import "./wisconsin/WisconsinFooter.scss";
import WisconsinLandingPage from "./wisconsin/WisconsinLandingPage";
import "./wisconsin/WisconsinLandingPage.scss";
import WisconsinStakeholderPages from "./wisconsin/WisconsinStakeholderPages";
import "./wisconsin/WisconsinStakeholderPages.scss";
import "./wisconsin/WisconsinStakeholderTopSection.scss";

function App() {
  return (
    <>
      <div className="my-profile">
        <nav className="navigation">
          <div className="page-container">
            {/* <div className="logo">
            <a href="#home"><img src="./public/logo.png" alt="Michael Pavelchuk logo" className="mp-logo"/></a>
          </div> */}
            <ul className="navigation-list" id="navigation">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cam">
                  Cambridge
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/uwmadison-cals">
                  Wisconsin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<MyProfile />} />
        <Route path="/cam" element={<CambridgeLandingPage />} />
        <Route path="/cam/:activePage" element={<CambridgeStakeholderPages />} />
        <Route path="/uwmadison-cals" element={<WisconsinLandingPage />} />
        <Route
          path="/uwmadison-cals/:activePage"
          element={<WisconsinStakeholderPages />}
        />
      </Routes>
    </>
  );
}

export default App;
