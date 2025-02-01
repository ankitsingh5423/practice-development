import { useState, useCallback, useEffect, useRef } from "react";
import "./style.css";

function App() {
  const [length, setLenght] = useState(5);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charaAllowed, setCharaAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charaAllowed) str += "@{*!+=-?/%";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charaAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charaAllowed, passwordGenrator]);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "orange",
          background: "grey",
          maxWidth: "600px",
          margin: "auto",
          marginTop: "3rem",
          fontSize: "26px",
          fontWeight: "600",
          padding: "30px",
        }}
      >
        <h1 style={{ marginTop: 0 }}>password Genrator</h1>
        <div>
          <input
            type="text"
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
            style={{
              padding: "10px",
              width: "80%",
              color: "orange",
              fontSize: "24px",
            }}
          />
          <button
            onClick={copyPasswordToClipboard}
            style={{ padding: "10px", fontSize: "24px" }}
          >
            copy
          </button>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div>
            <input
              type="range"
              min={5}
              max={100}
              value={length}
              onChange={(e) => {
                setLenght(e.target.value);
              }}
              style={{ cursor: "pointer" }}
            />
            <label htmlFor="">length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charaAllowed}
              id="charInput"
              onChange={() => {
                setCharaAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charaInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
