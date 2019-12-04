import React from 'react'


const Product= (props) => {
    
    return(
         <div>
             <div>{props.image}</div>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
        <div>Products</div>
        </div>
    )

}
export default Product
