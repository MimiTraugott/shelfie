import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      image_url: '',
      product_name: '',
      price: 0
    }
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

  render(){
  return (
    <div className="App">
      <Dashboard/>
      <Form/>
      <Header/>
      <input onChange={(e)=> this.handleImage(e.target.value)} type="text"/>
      <input onChange={(e)=> this.productName(e.target.value)} type="text"/>
      <input onChange={(e)=> this.handlePrice(e.target.value)} type="text"/>
      <button>Cancel</button>
      <button>Add</button>
   
    </div>
  );
  }
}

export default App;
