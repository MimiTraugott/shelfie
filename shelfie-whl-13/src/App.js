import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      image_url: '',
      product_name: '',
      price: 0,
      inventory: []
    };
    this.handleImage=this.handleImage.bind(this)
    this.productName=this.productName.bind(this)
    this.handlePrice=this.handlePrice.bind(this)
    this.cancelUpdate=this.cancelUpdate.bind(this)
    this.getInventory=this.getInventory.bind(this)
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory(body){
    axios.get('/api/inventory', body).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  handleImage(val){
    this.setState({
      image_url: val
    })
  }

  productName(val){
    this.setState({
      product_name: val
    })
  }

  handlePrice(val){
    this.setState({
      price: val
    })
  }

  cancelUpdate(e){
    this.setState({
      image_url: '',
      product_name: '',
      price: 0
    })
  }

  render(){
  return (
    <div className="App">
      <Dashboard inventory={this.state.inventory}/>
      <Form getInventory={this.state.inventory}/>
      <Header/>
      <input onChange={(e)=> this.handleImage(e.target.value)} type="text"/>
      <input onChange={(e)=> this.productName(e.target.value)} type="text"/>
      <input onChange={(e)=> this.handlePrice(e.target.value)} type="text"/>
      <button onCLick={(e)=> this.cancelUpdate(e.target.value)}>Cancel</button>
      <button>Add To Inventory</button>
   
    </div>
  );
  }
}

export default App;
