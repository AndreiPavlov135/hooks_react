import React from "react";
import useRequest from "../hooks/useRequest";
import axios from "axios";

export default function Request() {
  const [todos, loading, error] = useRequest(fetchTodos);
  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`);
  }
  if (loading) {
    return <h1>Грузим...</h1>;
  }
  if (error) {
    return <h1>{error.code}</h1>;
  }
  return (
    <div>
      {todos &&
        todos.map((e) => {
          return (
            <div key={e.id} style={{ padding: 30, border: "solid 2px teal" }}>
              {e.id}. {e.title}
            </div>
          );
        })}
    </div>
  );
}
