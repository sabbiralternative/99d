import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const HeaderBottomMenu = () => {
  const { getLanguage } = useLanguage();
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

  const headerTab = [
    {
      id: 0,
      name: getLanguage(LanguageKey.HOME),
      group: 0,
    },

    // {
    //   id: 22244,
    //   name: "FIFA 2026",
    //   group: null,
    //   path: "/event-details/4/1780591416",
    //   className: "new-launch-text",
    // },
    {
      id: 1,
      name: getLanguage(LanguageKey.CRICKET),
      group: 4,
    },
    {
      id: 2,
      name: getLanguage(LanguageKey.FOOTBALL),
      group: 1,
    },
    {
      id: 3,
      name: getLanguage(LanguageKey.TENNIS),
      group: 2,
    },
    {
      id: 6,
      name: getLanguage(LanguageKey.SPORTSBOOK),
      group: null,
      path: "/casino/sportsbook/550000",
    },
    {
      id: 4,
      name: getLanguage(LanguageKey.CASINO),
      group: null,
      path: "/casino?product=All&category=All",
    },
    // {
    //   id: 5,
    //   name: "Int Casino",
    //   group: null,
    //   path: "/int-casino",
    // },

    {
      id: 7,
      name: getLanguage(LanguageKey.HORSE),
      group: 7,
    },
    {
      id: 8,
      name: getLanguage(LanguageKey.GREYHOUND),
      group: 4339,
    },
    // {
    //   id: 9,
    //   name: "Binary",
    //   group: 5,
    // },
    {
      id: 10,
      name: getLanguage(LanguageKey.KABADDI),
      group: 6,
    },
    {
      id: 11,
      name: getLanguage(LanguageKey.POLITICS),
      group: 17,
    },
    {
      id: 9,
      name: getLanguage(LanguageKey.BASKETBALL),

      group: 7522,
    },
    {
      id: 10,
      name: getLanguage(LanguageKey.BASEBALL),

      group: 7511,
    },
    {
      id: 11,
      name: getLanguage(LanguageKey.TABLE_TENNIS),

      group: 20,
    },
    {
      id: 12,
      name: getLanguage(LanguageKey.VOLLYBALL),

      group: 998917,
    },
    {
      id: 13,
      name: getLanguage(LanguageKey.ICE_HOCKY),

      group: 7524,
    },
    {
      id: 14,
      name: getLanguage(LanguageKey.RUGBY),

      group: 5,
    },
    {
      id: 15,
      name: getLanguage(LanguageKey.MIXED_MARTIAL_ARTS),

      group: 26420387,
    },
    {
      id: 16,
      name: getLanguage(LanguageKey.DARTS),

      group: 3503,
    },
    {
      id: 17,
      name: getLanguage(LanguageKey.FUTSAL),

      group: 29,
    },
  ];

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
                  className={`nav-item active ${tab.className}`}
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
