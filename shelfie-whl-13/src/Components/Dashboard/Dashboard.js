import React, {Component} from 'react'
import Product from '../../Components/Product/Product'

export default class Dashboard extends Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div>Dashboard</div>
                <Product/>
            </div>

        )
    }
}