const Actions = () => {
  return (
    <div style={{ position: "relative" }}>
      <ul className="live_virtual">
        <li>
          <input
            type="checkbox"
            defaultValue="Order one"
            id="checkboxOnein_play-inplay"
            className="ng-untouched ng-pristine ng-valid"
          />
          <label htmlFor="checkboxOnein_play-inplay">LIVE</label>
        </li>
        <li>
          <input
            type="checkbox"
            defaultValue="Order Two"
            id="checkboxTwoin_play-inplay"
            className="ng-untouched ng-pristine ng-valid"
          />
          <label htmlFor="checkboxTwoin_play-inplay">VIRTUAL</label>
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
