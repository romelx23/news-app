import React from 'react'
import './Card.css'
export const Card = ({islarge,publishedAt,title,image,content,url}) => {
    // const {title,urlToImage,publishedAt,content}={news};
    // console.log(news.title);
    // console.log(islarge);
    const dateParse=new Date(publishedAt);
    const day=dateParse.getDate();
    const month=dateParse.getMonth();
    const year=dateParse.getFullYear();
    const fullDay=`0${day}/0${month}/${year}`;
    // console.log(dateParse);
    // console.log(`${day}/${month}/${year}`);
    return (
        <div className={`container__card ${islarge?'large':'short'}`}>
            <h3>{title}</h3>
            <img src={image} alt="news" />
            <h4>{fullDay}</h4>
            <h4>{content}</h4>
            <a href={url}>Ver Más</a>
        </div>
    )
}
