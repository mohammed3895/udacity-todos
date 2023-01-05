import React, { Fragment, useState } from "react";

function InputTodo() {
  // use hooks
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(
        "http://demotodos-env.eba-eg59rqym.us-east-1.elasticbeanstalk.com/todos",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.messege);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Todos List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-2 text-bold">
          ADD
        </button>
      </form>
    </Fragment>
  );
}

export default InputTodo;
