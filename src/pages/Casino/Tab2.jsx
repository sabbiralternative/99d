import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Tab2 = ({ subCategories, product, selectedSubCategory }) => {
  const activeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center", // key part
        block: "nearest",
      });
    }
  }, [selectedSubCategory, subCategories, product]);

  return (
    <ul style={{ scrollBehavior: "smooth" }} className="nav nav-tabs">
      <li
        ref={selectedSubCategory === "All" ? activeRef : null}
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
            ref={category === selectedSubCategory ? activeRef : null}
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
                  onError={(e) => {
                    if (e.target.src.endsWith(".svg")) {
                      // Try webp only once after svg fails
                      e.target.src = `/d/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.webp`;
                    } else if (e.target.src.endsWith(".webp")) {
                      // Try webp only once after svg fails
                      e.target.src = `/d/icon/${category
                        ?.split(" ")
                        .join("")
                        .toLowerCase()}.png`;
                    } else {
                      // If webp fails, do nothing (leave broken img)
                      // e.target.onerror = null;
                      e.target.src = `/d/icon/all.svg`;
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
