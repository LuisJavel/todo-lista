import React from "react";
import tick1 from "../assets/tick1.svg";
import tick from "../assets/tick.svg";
import delet_icon from "../assets/delete.svg";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick1 : tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 decoration-slate-500 ml-4 text-[17px] ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delet_icon}
        alt=""
        className="w-6 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
