import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo }) => {
  let listOfTodos = todos.map((todo) => {
    return (
      <p className="collection-item" onClick={() => deleteTodo(todo.id)}>
        {todo.content}
      </p>
    );
  });

  return (
    <div className="todos collection">
      {listOfTodos.length === 0 ? (
        <p className="center">You have finished all your task, WOO !!</p>
      ) : (
        listOfTodos
      )}
    </div>
  );
};

export default TodoList;
