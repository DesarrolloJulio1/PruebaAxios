import React from 'react'
import './card.css'




function Card({title1, imageUrl, url, description, description2}) {
  return (
    <div className="card">
      <img src={imageUrl} alt=""/>
      <div className="card-body">
        <h4 className="card-title">{title1}</h4>
        <p className="card-text text-secondary">
          {description}
        </p>
        <p className="card-text text-secondary">
          {description2}
        </p>
        <a href={url} className='btn btn-outline-secondary' target="_blank">Got this Website </a>
      </div>
    </div>
  )
}

export default Card