import React from 'react';
import logo from './logo.svg';
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

  addItem(todoValue){
    if(todoValue!==""){
      const newItem = {
        id: Date.now(),
        value: todoValue
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedlist = list.filter(item => item.id!==id);
    this.setState({
      list:updatedlist
    })
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
    return(
      <div className="container-fluid text-center">
        <div className="container">
          <div className="App-header">
          <img src={logo} width="100" height="100" className="App-logo"/>
          <h2 class="text-center">To Do App</h2>
          <p>Stack up your projects</p>
          </div>
          <h4 class="text-center"><u>Add Items</u></h4>
          <br/>
          <input type="text" className="input-group mb-2" placeholder="Add a TODO" required value={this.state.newItem} onChange={e=>this.updateInput(e.target.value)}/>
          <button className="btn btn-dark" onClick={()=>this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add Todo</button>
          <br/><br/>
          <div className="list-group">
            <ul>
              {this.state.list.map(item=>{
                return(
                  <li className="list-group-item" key={item.id}>
                    <p className="input-group mb-3">{item.value}</p>
                    <button className="btn btn-danger" onClick={()=>this.deleteItem(item.id)}>Delete</button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
