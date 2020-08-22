import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Pray' },
      { id: 2, content: 'Study React' },
    ],
  };

  deleteTodoOnClick = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center dark-text">Your Tasks</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodoOnClick}
        />
      </div>
    );
  }
}

export default App;
