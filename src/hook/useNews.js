import { useEffect, useState } from "react";
import { getNews, getSearchNews } from "../helpers/fetch";

export const useNews = () => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getNews().then((data) =>
      setTimeout(() => {
        setState({
          data,
          loading: false,
        });
      }, 500)
    );
    // console.log(state);
  }, []);
  return state;
};
export const useNewsSearch = (search) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getSearchNews(search).then((data) =>
      setTimeout(() => {
        setState({
          data,
          loading: false,
        });
      }, 500)
    );
    // console.log(state);
  }, [search]);
  return state;
};
