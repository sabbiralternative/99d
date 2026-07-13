import { useDispatch, useSelector } from "react-redux";
import { setGroup } from "../../../redux/features/global/globalSlice";
import { useNavigate } from "react-router-dom";
import useLanguage from "../../../hooks/useLanguage";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const Tab = () => {
  const { valueByLanguage } = useLanguage();
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
      name: "Inplay",
      group: 0,
    },
    {
      id: 1,
      name: languageValue(valueByLanguage, LanguageKey.CRICKET),

      group: 4,
    },
    {
      id: 2,
      name: languageValue(valueByLanguage, LanguageKey.FOOTBALL),

      group: 1,
    },
    {
      id: 3,
      name: languageValue(valueByLanguage, LanguageKey.TENNIS),

      group: 2,
    },
    {
      id: 3,
      name: "Cock Fight",
      eventId: 400332,
    },
    {
      id: 499,
      name: "Sportsbook",
      group: null,
      path: "/casino/sportsbook/550000",
    },
    {
      id: 4,
      name: languageValue(valueByLanguage, LanguageKey.HORSE),

      group: 7,
    },
    {
      id: 5,
      name: languageValue(valueByLanguage, LanguageKey.GREYHOUND),

      group: 4339,
    },
    // {
    //   id: 6,
    //   name: "Binary",

    //   group: 56666,
    // },
    {
      id: 7,
      name: languageValue(valueByLanguage, LanguageKey.KABADDI),

      group: 5,
    },
    {
      id: 8,
      name: "Politics",

      group: 6,
    },
    {
      id: 9,
      name: "Basketball",

      group: 7522,
    },
    {
      id: 10,
      name: "Baseball",

      group: 7511,
    },
    {
      id: 11,
      name: "Table Tennis",

      group: 20,
    },
    {
      id: 12,
      name: "Volleyball",

      group: 998917,
    },
    {
      id: 13,
      name: "Ice Hockey",

      group: 7524,
    },
    {
      id: 14,
      name: "Rugby",

      group: 5,
    },
    {
      id: 15,
      name: "Mixed Martial Arts",

      group: 26420387,
    },
    {
      id: 16,
      name: "Darts",

      group: 3503,
    },
    {
      id: 17,
      name: "Futsal",

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
