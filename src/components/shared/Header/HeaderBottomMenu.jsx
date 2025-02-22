import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setGroup } from "../../../redux/features/global/globalSlice";

const HeaderBottomMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
            <li className="nav-item active">
              <Link
                to="/"
                className="router-link-exact-active router-link-active"
              >
                <b>Home</b>
              </Link>
            </li>
            <li
              onClick={() => {
                dispatch(setGroup(4));
                navigate("/");
              }}
              className="nav-item"
            >
              <a>
                <b>Cricket</b>
                <em>New</em>
              </a>
            </li>
            <li
              onClick={() => {
                dispatch(setGroup(1));
                navigate("/");
              }}
              className="nav-item"
            >
              <a>
                <b>Football</b>
                <em>New</em>
              </a>
            </li>
            <li
              onClick={() => {
                dispatch(setGroup(2));
                navigate("/");
              }}
              className="nav-item"
            >
              <a>
                <b>Tennis</b>
                <em>New</em>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/casino">
                <b>Casino</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/int-casino">
                <b>Int Casino</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="javascript:void(0)" className="new-tag-menus">
                <b>Sports book</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/7">
                <b>Horse Racing</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/4339">
                <b>Greyhound Racing</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/99990" className="new-tag-menus">
                <b>Binary</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/99994">
                <b>Kabaddi</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/2378961">
                <b>Politics</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/7522">
                <b>Basketball</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/7511">
                <b>Baseball</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/20">
                <b>Table Tennis</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/998917">
                <b>Volleyball</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/7524">
                <b>Ice Hockey</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/5">
                <b>Rugby</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/26420387">
                <b>Mixed Martial Arts</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/3503">
                <b>Darts</b>
                <em>New</em>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/game-list/29">
                <b>Futsal</b>
                <em>New</em>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderBottomMenu;
