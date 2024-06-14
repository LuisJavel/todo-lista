import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.svg";
import TodoItems from "./TodoItems";
// import TodoItems from "./TodoItems"

const Todo = () => {
    
  const [todo, setTodo] = useState(localStorage.getItem("todoss") ? JSON.parse(localStorage.getItem("todoss")) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputRef === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodo((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
  };

  //para usar imagen
  const deleteTodo = (id) => {
    setTodo((prvTodos) => {
      return prvTodos.filter((todos) => todos.id !== id);
    });
  };

  const toggle = (id) => {
    setTodo((prevTodos) => {
      return prevTodos.map((todos) => {
        if (todos.id === id) {
          return { ...todos, isComplete: !todos.isComplete };
        }
        return todos;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todoss", JSON.stringify(todo))
  }, [todo]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="" />
        <h1 className="text-3xl font-serif">Todo List</h1>
      </div>
      <div className="flex items-center my-7 bg-gray-300 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Añade tareas"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          Añadir +
        </button>
      </div>
      {todo.map((item, index) => {
        return (
          <TodoItems
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        );
      })}
      {/* --- lista --- */}
      <div></div>
    </div>
  );
};

export default Todo;
