import React from "react";

function Item({ name, setList, list, id }) {
  let deleteItem = (id) => {
    const res = list.filter((value) => {
      return value.id != id;
    });
    setList(res);
    setTimeout(() => {
      setTimeout(() => {
        alert("item Delete sucessfully");
      }, 100);
    }, 100);
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
