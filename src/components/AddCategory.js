import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddCategory({setCate}) {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Hecho');
        if (inputValue.trim().length > 2){
            setCate( cats => [ inputValue , ...cats]);
            setInputValue('');
        }
        


    }   

    return (
   <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className="cate_input"
             placeholder="Type your category"
             value={inputValue}
            onChange={handleInputChange}      
             />
   </form>
       
    )
}

AddCategory.propTypes = {
    setCate: PropTypes.func.isRequired
}




export default AddCategory

