import React, { Fragment, useEffect, useState } from "react";
import EditTodos from "./editTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from data base
  const getTodos = async () => {
    try {
      const res = await fetch(
        "http://todos.eba-pvvacchm.us-east-1.elasticbeanstalk.com/todos"
      );
      const data = await res.json();

      setTodos(data);
    } catch (err) {
      console.error(err.messege);
    }
  };

  // Delete Function
  const deletTodo = async (id) => {
    try {
      await fetch(
        `http://todos.eba-pvvacchm.us-east-1.elasticbeanstalk.com/todos/${id}`,
        {
          method: "DELETE",
        }
      );

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err.messege);
    }
  };

  console.log(todos);
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>
                <EditTodos todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletTodo(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
