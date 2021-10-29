import React from 'react'

const GifGridItem = ({url, id, title}) => {


    return (
        <div className="card-item">
            <img src={url} alt={title} id={id}/>
            <p>{title}</p>
        </div>
    )
}


export default GifGridItem
