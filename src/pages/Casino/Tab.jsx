import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tab = ({ categories, selectedCategory }) => {
  const navigate = useNavigate();
  const activeRef = useRef(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedCategory, categories]);
  return (
    <ul
      style={{ scrollBehavior: "smooth", paddingBottom: "0px" }}
      role="tablist"
      className="nav nav-tabs"
      aria-label="Tabs"
    >
      <li
        ref={selectedCategory === "All" ? activeRef : null}
        style={{
          color: selectedCategory === "All" ? "white" : "black",
          borderRight: "1px solid var(--theme2-bg)",
        }}
        onClick={() => {
          navigate(`/casino?product=All&category=All`);
        }}
        className={` nav-item ${selectedCategory === "All" ? "active" : ""}`}
      >
        <a className={`nav-link ${selectedCategory === "All" ? "active" : ""}`}>
          <span tabIndex={0}>All</span>
        </a>
      </li>
      {categories?.map((category) => {
        return (
          <li
            ref={category === selectedCategory ? activeRef : null}
            style={{
              color: selectedCategory === category ? "white" : "black",
              borderRight: "1px solid var(--theme2-bg)",
            }}
            onClick={() => {
              navigate(`/casino?product=${category}&category=All`);
            }}
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
