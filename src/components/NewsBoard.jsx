

import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";




const NewsBoard = ({category}) => {

  
  const [articles, setArticles] = useState([]);


    useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=9d9d778dca574e3698bea3dc978ef448`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles)  );
      
    },[category])




  return (
    <div>
      <h2 className="text-center">Central <span className="badge bg-black">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>;
      })}
    </div>
  )
}

export default NewsBoard


