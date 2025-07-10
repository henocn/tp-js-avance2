import React from 'react'

const Article = ({articles}) => {
  return (
    articles.map((article, id) => (
        <article key = {id} className="contact-card">
            <img 
                src={article.img}
                alt="Photo of Fluffykins"
            />
            <h3>{article.name}</h3>
            <div className="info-group">
                <img 
                    src="./images/phone-icon.png" 
                    alt="phone icon" 
                />
                <p>{article.phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src="./images/mail-icon.png" 
                    alt="mail icon"
                />
                <p>{article.email}</p>
            </div>
        </article>
    ))
  )
}

export default Article