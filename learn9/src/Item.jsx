import React from "react";
import { toast } from "react-toastify";

function Item({ name, setList, list, id }) {
  let deleteItem = (id) => {
    const res = list.filter((value) => {
      return value.id != id;
    });
    setList(res);
    localStorage.setItem("todo", JSON.stringify(res));
    toast.success("Item Delete Sucessfully");
  };
  return (
    <>
      <li>
        <input type="checkbox" />
        <span>{name}</span>
        <button
          className="delete-btn"
          onClick={() => {
            deleteItem(id);
            console.log(id);
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
}

export default Item;
