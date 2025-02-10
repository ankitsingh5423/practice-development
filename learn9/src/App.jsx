import { useEffect, useState } from "react";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");

  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo")) ?? []
  );

  const toDO = () => {
    list.push({ id: list.length + 1, name: inputText });
    setList(list);
    localStorage.setItem("todo", JSON.stringify(list));
    setInputText("");
    toast.success("Item Add Successfully")
  };

  return (
    <>
      <div className="container">
        <h2>Grocery Bud</h2>
        <div className="input-container">
          <input
            type="text"
            id="grocery-input"
            placeholder="Enter item..."
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button className="add-btn" onClick={toDO}>
            Add Item
          </button>
        </div>
        <ul className="grocery-list">
          {list.map((value) => {
            return (
              <Item
                name={value.name}
                key={value.id}
                list={list}
                setList={setList}
                id={value.id}
              />
            );
          })}
        </ul>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
