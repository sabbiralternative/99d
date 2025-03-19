import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { AxiosSecure } from "../../../lib/AxiosSecure";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  const token = useSelector(userToken);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchText?.length > 2) {
      const getSearchData = async () => {
        const { data } = await AxiosSecure.post(API.searchEvent, {
          name: searchText,
        });
        console.log(data);
        if (data?.result?.length > 0) {
          setData(data?.result);
        }
      };
      getSearchData();
    }
  }, [searchText, token]);

  /* hide the search modal */
  const handleHideDropdown = (item) => {
    navigate(`/event-details/${item?.eventTypeId}/${item?.eventId}`);
    setSearchText("");
    setData([]);
  };

  return (
    <li className="search float-left">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        name="game_keyword"
        placeholder="All Events"
        type="text"
        className={`ng-pristine ng-valid ng-touched ${
          showInput ? "search-input-show" : ""
        }`}
        aria-expanded="false"
        aria-autocomplete="list"
      />
      <a onClick={() => setShowInput((prev) => !prev)}>
        <FontAwesomeIcon icon={faSearchPlus} />
      </a>
      {/* Search Result */}
      {data?.length > 0 && searchText && (
        <div
          className="dropdown open bottom ng-tns-c52-0 dropdown-menu ng-star-inserted"
          style={{
            position: "absolute",
            display: "block",
            visibility: "visible",
            willChange: "transform",
            top: "0px",
            left: "0px",
            transform: "translate3d(0px, 38px, 0px)",
          }}
          id="ngb-typeahead-0"
          role="listbox"
        >
          <ul className="custom-list-group search-game-ul ng-star-inserted">
            {data?.map((item) => {
              return (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => handleHideDropdown(item)}
                  key={item?.eventId}
                  className="ng-star-inserted"
                >
                  <div>
                    <a>
                      <div className="search-game-name">
                        <b>{item?.eventType}</b>
                        <b />
                      </div>
                      <div className="game-date text-right ng-star-inserted">
                        {item?.openDate}
                      </div>

                      <div className="game-teams">{item?.name}</div>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Search;
