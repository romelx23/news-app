export const getNews = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ae24d11c36f646e29373e404f1bef4ba`;
  const resp = await fetch(url);
  const { articles } = await resp.json();
  // console.log(articles)
  return articles;
};
export const getSearchNews = async (search) => {
  const url = `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=ae24d11c36f646e29373e404f1bef4ba
    `;
  try {
    const resp = await fetch(url);
    const { articles } = await resp.json();
    // console.log(articles)
    return articles;
  } catch (error) {
      console.log(error)
  }
};
