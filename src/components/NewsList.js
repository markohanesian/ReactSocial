import React, { useState, useEffect } from 'react';
import axios from 'axios';
// NewsItem component to display new articles
import NewsItem from './NewsItem';

export default function NewsList() {
    // When no articles, nothing will be shown
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=701157776827481988e23accca272ebc");
            // show retrieved data in console
            setArticles(res.data.articles);
            console.log(res)
        };
        getArticles();
    },
        // empty array so that data is fetched only once
        [])

    return (
        <div>
            {articles.map(({title, description, url, urlToImage}) => (
                <NewsItem
                    title={title}
                    description={description}
                    url={url}
                    urlToImage={urlToImage}
                />
            ))}
        </div>
    )
}


