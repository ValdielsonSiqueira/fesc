import React from 'react';

import './App.css';

import ListItems from  './list/ListItems';

import { FaTrash } from 'react-icons/fa';

//import { library } from "react-icons/fa";

//library.add(FaTrash);

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      items: [],
      currentItem:{
        text:'',
        key:'',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(event){
    this.setState({
      currentItem:{
        text: event.target.value,
        key: Date.now()
      }
    })
  }

  addItem(event){
    event.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems = [...this.state.items, newItem];
      this.setState({
        items : newItems, 
        currentItem:{
          text: '',
          key: ''
        }
        
      })
    }
  }

  deleteItem(key){
    const filterItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items: filterItems
      })
  }

  render(){  
    return(
      <div className="App">
      
        <header>
        <form id="todolist-form" onSubmit= {this.addItem}>
        <input type="text" placeholder="Digite a tarefa"
        value={this.state.currentItem.text}
        onChange={this.handleInput}
        />
        <button type="submit">Adicionar</button>
        </form>
      </header>
      <ListItems items = {this.state.items}
      deleteItem = {this.deleteItem} ></ListItems>

      </div>
      
    );
  }
}

export default App;
