import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import { Settings } from "./api";
import { useDispatch } from "react-redux";
import disableDevtool from "disable-devtool";
import { logout } from "./redux/features/auth/authSlice";
import { isMobile } from "react-device-detect";

function App() {
  const disabledDevtool = Settings.disabledDevtool;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isMobile) {
      navigate("/m/");
    }
  }, [navigate]);

  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [navigate, disabledDevtool, dispatch]);
  return <MainLayout />;
}

export default App;
