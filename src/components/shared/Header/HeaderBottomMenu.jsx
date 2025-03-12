import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { headerTab } from "../../../static/group";

const HeaderBottomMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = (tab) => {
    if (tab?.path) {
      navigate(tab?.path);
    } else {
      dispatch(setGroup(tab?.group));
      navigate("/");
    }
  };
  return (
    <div className="header-bottom m-t-10 col-md-12">
      <nav className="navbar navbar-expand-md btco-hover-menu">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          <ul className="list-unstyled navbar-nav">
            {headerTab?.map((tab) => {
              return (
                <li
                  onClick={() => handleNavigate(tab)}
                  key={tab?.id}
                  className="nav-item active"
                >
                  <a className="router-link-exact-active router-link-active">
                    <b>{tab?.name}</b>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottomMenu;
