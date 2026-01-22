const Tab = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <ul
      role="tablist"
      className="nav nav-tabs"
      aria-label="Tabs"
      style={{ paddingBottom: "0px" }}
    >
      <li
        style={{
          color: selectedCategory === "All" ? "white" : "black",
          borderRight: "1px solid var(--theme2-bg)",
        }}
        onClick={() => setSelectedCategory("All")}
        className={` nav-item ${selectedCategory === "All" ? "active" : ""}`}
      >
        <a className={`nav-link ${selectedCategory === "All" ? "active" : ""}`}>
          <span tabIndex={0}>All</span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            style={{
              color: selectedCategory === category ? "white" : "black",
              borderRight: "1px solid var(--theme2-bg)",
            }}
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={` nav-item ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            <a
              className={`nav-link ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              <span tabIndex={0}>{category}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Tab;
