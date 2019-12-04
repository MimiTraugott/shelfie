import React from 'react'
import Product from '../../Components/Product/Product'

const Dashboard = (props) => {
   
    return(
        <div className='dashboard'>
            {props.inventory.map((element, index) => {
            return (
            <Product
            img={element.image}
            name={element.product}
            price={element.price}/>
            )
            })}
        <div>Dashboard</div>                
        </div>

    )
}
export default Dashboard
