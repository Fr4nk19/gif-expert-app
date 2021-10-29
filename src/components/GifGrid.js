import React, { useEffect, useState } from 'react'
import GifGridItem from './GifGridItem'
const GifGrid= ({category}) => {

const [images, setImages] = useState([])

        useEffect( () =>{
            getGifs();
        }, [])

    const getGifs = async() => {

            const url = 'https://api.giphy.com/v1/gifs/search?q=Dragon+Ball&limit=12&api_key=JjodLzAIhMDYgbymB4EIZKq338mFkeIE';
            const resp = await fetch(url)
            const {data} = await resp.json();

            const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })

   

            setImages(gifs);
    }




    return (
        <div>
            <h3>{category}</h3>
  
            <div className="grid_gif">
            {
                images.map( imgs => ( 
                    <GifGridItem
                    key={imgs.id}
                    {...imgs}/>               
                    ))
                }                
            </div>
        </div>
    )
}

// GifGrid.propTypes = {

// }

export default GifGrid
