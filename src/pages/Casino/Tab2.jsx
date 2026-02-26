import { useNavigate } from "react-router-dom";

const Tab2 = ({ subCategories, product, selectedSubCategory }) => {
  const navigate = useNavigate();

  return (
    <ul className="nav nav-tabs">
      <li
        style={{
          background: selectedSubCategory === "All" ? "var(--theme2-bg)" : "",
        }}
        onClick={() => {
          navigate(`/casino?product=${product}&category=All`);
        }}
        className={` nav-item ${
          selectedSubCategory === "All" ? "active " : ""
        }`}
      >
        <a
          className={`nav-link ${
            selectedSubCategory === "All" ? "active " : ""
          }`}
        >
          <span>
            <img
              className="img-fluid"
              src="https://tezcdn.io/casino/int-casino-icon/all.webp"
            />
            all
          </span>
        </a>
      </li>
      {subCategories?.map((category) => {
        return (
          <li
            style={{
              background:
                selectedSubCategory === category ? "var(--theme2-bg)" : "",
            }}
            onClick={() => {
              navigate(`/casino?product=${product}&category=${category}`);
            }}
            key={category}
            className={`nav-item  ${
              selectedSubCategory === category ? "active" : ""
            }`}
          >
            <a
              style={{ height: "100%" }}
              className={`nav-link ${
                selectedSubCategory === category ? "active" : ""
              }`}
            >
              <span>
                <img
                  className="img-fluid"
                  src={`/d/icon/${category
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                />
                {category}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab2;
