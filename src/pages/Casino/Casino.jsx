import { useEffect, useMemo, useState } from "react";
import Tab from "./Tab";
import Tab2 from "./Tab2";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetIndex } from "../../hooks";
import images from "../../assets/images";
import { FaSearch } from "react-icons/fa";

const Casino = () => {
  const { data } = useGetIndex({
    type: "99_all_casino",
  });
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const gameName = params.get("gameName");

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState("All");
  const allTables = data?.data?.allTables;
  // const tables = data?.data?.tables?.[100000];

  const handleNavigateToIFrame = (casino) => {
    navigate(`/casino/${casino?.name?.replace(/ /g, "")}/${casino?.id}`);
  };

  const allGames =
    allTables &&
    Object.values(allTables).flatMap((provider) =>
      Object.values(provider).flat(),
    );

  // const tablesGames =
  //   tables &&
  //   Object.values(tables).flatMap((provider) => Object.values(provider).flat());

  const categories =
    allGames && Array.from(new Set(allGames?.map((game) => game?.product)));

  const subCategories = useMemo(() => {
    if (allGames && categories && selectedCategory === "All") {
      return Array.from(new Set(allGames?.map((game) => game?.category)));
    }
    if (allGames && categories && selectedCategory !== "All") {
      const allCategory = allGames?.filter(
        (game) => game?.product === selectedCategory,
      );
      return Array.from(new Set(allCategory?.map((game) => game?.category)));
    }
  }, [categories, allGames, selectedCategory]);

  const filteredData = useMemo(() => {
    if (allGames && categories && subCategories) {
      if (search) {
        return allGames?.filter((game) => game?.category?.includes(search));
      }
      if (!search) {
        if (selectedCategory === "All" && selectedSubCategory === "All") {
          return allGames;
        }
        if (selectedCategory === "All" && selectedSubCategory !== "All") {
          return allGames?.filter(
            (game) => game?.category === selectedSubCategory,
          );
        }
        if (selectedCategory !== "All" && selectedSubCategory === "All") {
          return allGames?.filter((game) => game?.product === selectedCategory);
        }
        if (selectedCategory !== "All" && selectedSubCategory !== "All") {
          return allGames?.filter(
            (game) =>
              game?.product === selectedCategory &&
              game?.category === selectedSubCategory,
          );
        }
      }
    }
  }, [
    allGames,
    categories,
    selectedSubCategory,
    subCategories,
    selectedCategory,
    search,
  ]);

  useEffect(() => {
    setSelectedSubCategory("All");
  }, [selectedCategory]);

  useEffect(() => {
    if (allGames) {
      if (name && gameName) {
        setSelectedCategory(name);
        setSelectedSubCategory(gameName);
      }
    }
  }, [allGames, gameName, name]);

  return (
    <div className="col-md-10 featured-box">
      <div>
        <div>
          <div className="home-products-container mt-1">
            <div className="casino-title">
              <img
                src={images.casino}
                className="=img-fluid"
                style={{ width: "14px", height: "auto", marginRight: "1px" }}
              />{" "}
              Casino{" "}
              <div className="casino_searchbar">
                <div className="input-group">
                  <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search Game..."
                    className="ng-untouched ng-pristine ng-valid"
                  />
                  <span className="input-group-text">
                    <FaSearch color="#fff" />
                  </span>
                </div>
              </div>
            </div>
            <div className="row row5">
              <div className="col-md-12">
                <div className="casino_tabs_ul tab-container">
                  <Tab
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-labelledby
                      className="tab-pane active"
                    >
                      <div className="icasino_ul_tabs">
                        <div className="tab-container">
                          <Tab2
                            setSelectedSubCategory={setSelectedSubCategory}
                            selectedSubCategory={selectedSubCategory}
                            subCategories={subCategories}
                          />

                          <div className="tab-content">
                            <div
                              id="tab1"
                              role="tabpanel"
                              aria-labelledby="tab1-link"
                              className="tab-pane active"
                            >
                              <div className="row row-casino">
                                {filteredData?.map((casino) => {
                                  return (
                                    <div
                                      onClick={() =>
                                        handleNavigateToIFrame(casino)
                                      }
                                      key={casino?.id}
                                      className="col-md-2 col-3"
                                    >
                                      <div className="d-inline-block casinoicons">
                                        <img
                                          className="img-fluid"
                                          src={casino?.url_thumb}
                                        />
                                        <div className="casino-name">
                                          {casino?.name}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
