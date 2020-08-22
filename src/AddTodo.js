import React, { Component } from 'react';
class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    content: '',
  };

  handleInputChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>Add new task:</lable>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.content}
        />
      </form>
    );
  }
}

export default AddTodo;
