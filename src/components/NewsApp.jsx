import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { DashBoard } from './DashBoard'

export const NewsApp = (props) => {
    const [news, setNews] = useState([])
    const [newsType, setNewsType] = useState({ id: 1, res: '' })
    let heading = ''
    if (newsType.id === 1) {
        heading = 'Top-HeadLines'
    }
    else if (newsType.id === 2) {
        heading = 'SearchResult'
    }
    else if (newsType.id === 3) {
        heading = 'Category'
    }
    else if (newsType.id === 4) {
        heading = 'Read-List'
    }
    useEffect(() => {
        let url = ''
        if (newsType.id == 1)
            url = `https://newsapi.org/v2/top-headlines?country=in&apikey=8a760bc53a8f4fbd888b82b5333142ff&page=1`
        if (newsType.id === 3) {
            url = `https://newsapi.org/v2/top-headlines?category=${newsType.res}&apikey=09b7c12a5db942ee84421d6d42442b27&page=1`
        }
        else if (newsType.id == 2)
            url = `https://newsapi.org/v2/everything?q=${newsType.res}&apiKey=09b7c12a5db942ee84421d6d42442b27&language=en&page=1`
        else if (newsType.id == 4)
            url = `http://localhost:3001/news`
        axios.get(url)
            .then((response) => {
                if(newsType.id==4)
                    setNews(response.data)
                else
                    setNews(response.data.articles)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [newsType.id, newsType.res])
    const topHeadNews = () => {
        setNewsType({
            id: 1, res: ''
        })
    }
    const searchNews = (res) => {
        setNewsType({
            id: 2, res: res
        })
    }
    const categoryNews = (result) => {
        setNewsType({
            id: 3,
            res: result
        })
    }
    const readList = ()=>{
        setNewsType({
            id:4,
            res:''
        })
    }
    return (
        <div>
            <Header readList={readList} topHeadNews={topHeadNews} searchNews={searchNews} categoryNews={categoryNews} />
            <DashBoard news={news} heading={heading} res={newsType.res} />
        </div>
    )
}
