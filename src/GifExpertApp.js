import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'


function GifExpertApp() {

    const [cate, setCate] = useState(['Dragon Ball'])
   
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCate={setCate}/>
        <hr/>
        <ol>
            {
                cate.map( category => ( 
                    // <li key={category}>{category}</li>
                    <GifGrid 
                      key={ category }
                      category={ category }
                      />
                ))
            }
        </ol>
        </>
    )
}

export default GifExpertApp

