import React, { useState, useEffect } from "react";
import { fetchapi } from "../fetchapi";
import TrendingList from "./TrendingList";
import Loading from "./Loading";
import { Pagination } from "@mui/material";
import usePagination from "../usePagination";
import "../styles/trending.css";

function Trending() {
  const [trendings, settrendings] = useState([]);
  const [totalResults, settotalResults] = useState();
  const [loading, setloading] = useState(false);

  const [Page, setPage] = useState(1);
  const apifetch = async () => {
    setloading(true);
    const data = await fetchapi(
      "https://api.themoviedb.org/3/trending/all/week?",
      Page
    );

    settrendings(data.results);
    settotalResults(data.total_results);
    setloading(false);
  };
  const _DATA = usePagination(trendings, 20);

  const pag = (e, value) => {
    setPage(value);
    _DATA.jump(value);
    console.log(_DATA);
    apifetch();
  };
  useEffect(() => {
    apifetch();
  }, []);

  return (
    <>
      <h1>Trending</h1>

      <div className="cc">
        {loading ? (
          <Loading />
        ) : (
          <div className="single_trend">
            {trendings.map((trending, index) => {
              return (
                <TrendingList
                  trending={trending}
                  key={index}
                  loading={loading}
                />
              );
            })}
          </div>
        )}

        <Pagination
          sx={{ mt: 10, mb: 10 }}
          count={Math.ceil(totalResults / 20)}
          page={Page}
          onChange={pag}
        />
      </div>
    </>
  );
}

export default Trending;
