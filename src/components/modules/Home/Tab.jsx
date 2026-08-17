import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { useNavigate } from "react-router-dom";
import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const Tab = () => {
  const { getLanguage } = useLanguage();
  const { group } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const handleGroupType = (item) => {
    if (item?.path) {
      navigate(item?.path);
    }
    if (item?.group) {
      dispatch(setGroup(item?.group));
    }
    if (item?.eventId) {
      if (token) {
        navigate(`/casino/cock-fight/${item?.eventId}`);
      } else {
        navigate("/login");
      }
    }
  };

  const homeTab = [
    {
      id: 0,
      name: getLanguage(LanguageKey.IN_PLAY),
      group: 0,
    },
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
      id: 3,
      name: getLanguage(LanguageKey.COCK_FIGHT),
      eventId: 400332,
    },
    {
      id: 499,
      name: getLanguage(LanguageKey.SPORTSBOOK),
      group: null,
      path: "/casino/sportsbook/550000",
    },
    {
      id: 4,
      name: getLanguage(LanguageKey.HORSE),

      group: 7,
    },
    {
      id: 5,
      name: getLanguage(LanguageKey.GREYHOUND),

      group: 4339,
    },
    // {
    //   id: 6,
    //   name: "Binary",

    //   group: 56666,
    // },
    {
      id: 7,
      name: getLanguage(LanguageKey.KABADDI),

      group: 5,
    },
    {
      id: 8,
      name: getLanguage(LanguageKey.POLITICS),

      group: 6,
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
    <>
      <ul role="tablist" className="nav nav-tabs" aria-label="Tabs">
        {homeTab.map((tab) => {
          return (
            <li
              style={{ color: group === tab.group ? "white" : "black" }}
              key={tab.id}
              className={` nav-item ${group === tab.group ? "active" : ""}`}
            >
              <a
                onClick={() => handleGroupType(tab)}
                role="tab"
                className={`nav-link  ${group === tab.group ? "active" : ""}`}
                aria-controls
                aria-selected="true"
                id
              >
                <span>{tab.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Tab;
