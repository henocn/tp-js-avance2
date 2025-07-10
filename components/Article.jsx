import React from 'react'

const Article = ({articles}) => {
  return (
    <div className="articles-container">
        {articles.map((article, id) => (
            <article key = {id} className="article-card">
                <img className='article-image' src={article.img} alt={article.name} />
                <h3 className='article-name'>{article.name}</h3>
                <div className="article-phone">
                    <p>{article.phone}</p>
                </div>
                <div className="article-email">
                    <p>{article.email}</p>
                </div>
            </article>
        ))}
    </div>
  )
}

export default Article