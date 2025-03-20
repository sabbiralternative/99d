const Tab2 = ({ categories, setSelectedSubCategory, selectedSubCategory }) => {
  return (
    <ul className="nav nav-tabs">
      <li
        style={{
          background: selectedSubCategory === "All" ? "var(--theme2-bg)" : "",
        }}
        onClick={() => setSelectedSubCategory("All")}
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
      {categories?.map((category) => {
        return (
          <li
            style={{
              background:
                selectedSubCategory === category ? "var(--theme2-bg)" : "",
            }}
            onClick={() => setSelectedSubCategory(category)}
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
                {/* <img
                  className="img-fluid"
                  src={`/icon/${category
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                /> */}
                <img
                  className="img-fluid"
                  src={`/icon/${category
                    ?.split(" ")
                    .join("")
                    .toLowerCase()}.svg`}
                  onError={(e) => {
                    if (e.target.src.endsWith(".svg")) {
                      // Try webp only once after svg fails
                      e.target.src = `/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.webp`;
                    } else {
                      // If webp fails, do nothing (leave broken img)
                      e.target.onerror = null;
                    }
                  }}
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
