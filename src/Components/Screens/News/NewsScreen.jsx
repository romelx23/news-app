import React, { useState } from "react";
import { useNews, useNewsSearch } from "../../../hook/useNews";
import { Card } from "../../CardNews/Card";
import "./News.css";

export const NewsScreen = () => {
  const [search, setSearch] = useState("ran");
  // const { data: news, loading } = useNews();
  const { data: news, loading } = useNewsSearch(search);
  console.log(news);
  console.log(loading);
  const handleSearch = (e) => {
    const valor=e.target.value;
    console.log(valor);
      setSearch(valor);
  };
  return (
    <>
      <h2>News App</h2>
      <input
        type="text"
        onChange={(e) => {
          handleSearch(e);
        }}
      />
      <div className="container__news">
        {loading ? (
          <h2>esta cargando...</h2>
        ) : (
          news && news.map((notice) => {
            const { publishedAt, title, urlToImage, content, url } = notice;
            return (
              <Card
                key={publishedAt}
                publishedAt={publishedAt}
                title={title}
                image={urlToImage}
                content={content}
                url={url}
              />
            );
          })
        )}
        {/* <Card islarge={true} /> */}
      </div>
    </>
  );
};
