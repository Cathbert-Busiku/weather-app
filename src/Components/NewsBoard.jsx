import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const { category, country } = useParams();
  const [articles, setArticles] = useState([]);

  const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY; 
  console.log('News key',NEWS_API_KEY);
  
   // Fetch top headlines based on category and country
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${NEWS_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles); // Set articles state with fetched data
       
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [category, country]);

  return (
    <div>
      <h2 className="text-center text-dark m-2">
        <span className="badge bg-danger">Latest News</span>
      </h2>
      <div className="d-flex flex-wrap justify-content-center">
        {articles.map((news, index) => (
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;
