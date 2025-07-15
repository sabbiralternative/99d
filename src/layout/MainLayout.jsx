/* eslint-disable react/no-unknown-property */

import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Banner from "../components/modals/Banner/Banner";

const MainLayout = () => {
  return (
    <div _nghost-ask-c9 ng-version="12.1.5">
      <Banner />
      <div _nghost-ask-c85>
        <div _ngcontent-ask-c85 id="app">
          <div _ngcontent-ask-c85 className="wrapper">
            <Header />
            <div _ngcontent-ask-c85 className="main">
              <div
                _ngcontent-ask-c85
                className="container-fluid container-fluid-5"
              >
                <div _ngcontent-ask-c85 className="row row5">
                  <Sidebar />
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default MainLayout;
