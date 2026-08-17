import { useSelector } from "react-redux";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const Actions = ({ setLiveVirtual, liveVirtual }) => {
  const { getLanguage } = useLanguage();
  const { group } = useSelector((state) => state.global);
  const onChangeLiveVirtual = (type, eventTypeId, isChecked) => {
    const obj = { type, eventTypeId, isChecked };

    setLiveVirtual((prev) => {
      const index = prev.findIndex(
        (item) => item.eventTypeId === eventTypeId && item.type === type,
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          isChecked,
        };
        return updated;
      }

      return [...prev, obj];
    });
  };
  return (
    <div style={{ position: "relative" }}>
      <ul className="live_virtual">
        <li>
          <input
            onChange={(e) =>
              onChangeLiveVirtual("live", group, e.target?.checked)
            }
            checked={
              liveVirtual?.find(
                (item) => item.eventTypeId == group && item.type === "live",
              )?.isChecked ?? false
            }
            type="checkbox"
            defaultValue="Order one"
            id={`checkboxOnein_play-inplay-${group}`}
            className="ng-untouched ng-pristine ng-valid"
          />
          <label htmlFor={`checkboxOnein_play-inplay-${group}`}>
            {getLanguage(LanguageKey.LIVE)}
          </label>
        </li>
        <li>
          <input
            onChange={(e) =>
              onChangeLiveVirtual("virtual", group, e.target?.checked)
            }
            checked={
              liveVirtual?.find(
                (item) => item.eventTypeId == group && item.type === "virtual",
              )?.isChecked ?? false
            }
            type="checkbox"
            defaultValue="Order Two"
            id={`checkboxTwoin_play-inplay-${group}`}
            className="ng-untouched ng-pristine ng-valid"
          />
          <label htmlFor={`checkboxTwoin_play-inplay-${group}`}>
            {getLanguage(LanguageKey.VIRTUAL)}
          </label>
        </li>
      </ul>
      <div className="filter-ct">
        <label>View by:</label>
        <select className="form-control-sm ng-untouched ng-pristine ng-valid">
          <option value="c">Competitions</option>
          <option value="t">Time</option>
        </select>
      </div>
    </div>
  );
};

export default Actions;
