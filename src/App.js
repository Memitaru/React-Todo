import React from "react";
import Form from "./components/TodoComponents/TodoForm";
import List from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      toDoList: [
        {
          todo: "Make to-do list",
          id: 1,
          complete: false
        },
        {
          todo: "Add new item",
          id: 2,
          complete: false
        }
      ]
    };
  }

  inputHandler = event => {
    this.setState({
      textInput: event.target.value
    });
  };

  addHandler = event => {
    event.preventDefault();
    let id = Date.now();

    this.setState({
      toDoList: [
        ...this.state.toDoList,
        { todo: this.state.textInput, id, complete: false }
      ],
      textInput: ""
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>To-Do</h2>
        <div>
          {this.state.toDoList.map(item => (
            <List item={item} />
          ))}
        </div>
        <div>
          
          <Form
            textInput={this.state.textInput}
            inputHandler={this.inputHandler}
            addHandler={this.addHandler}
          />
        </div>
      </div>
    );
  }
}

export default App;
