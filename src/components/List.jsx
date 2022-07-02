import { useRef, useState } from "react";
import useScroll from "../hooks/useScroll";

export default function List() {
  const parentRef = useRef();
  const childRef = useRef();
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  useScroll(parentRef, childRef, () => {
    fetchTodos(page, limit);
  });
  function fetchTodos(page, limit) {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPage((prev) => prev + 1);
      });
  }

  return (
    <div ref={parentRef} style={{ height: "100vh", overflow: "auto" }}>
      {todos.map((e) => {
        return (
          <div key={e.id} style={{ padding: 30, border: "solid 2px teal" }}>
            {e.id}. {e.title}
          </div>
        );
      })}
      <div ref={childRef} style={{ visibility: "hidden" }}></div>
    </div>
  );
}
