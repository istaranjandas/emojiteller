import React, { useState } from "react";
import "./styles.css";
var headingname = "Welcome  ";
// var username = prompt("Whats your name?")

export default function App() {
  var emojiDictionary = {
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🐕": "Dog",
    "🦊": "Fox",
    "🐈": "Cat"
  };
  var emojis = Object.keys(emojiDictionary);
  const [meaning, setmeaning] = useState("");
  function changeHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setmeaning(meaning);
    } else {
      meaning = "We dont have that in database";
      setmeaning(meaning);
    }
  }
  // if(meaning === "undefind"){
  //   meaning = "We don't have that in our db";
  // }
  function ClickHandler(items) {
    var meaning = emojiDictionary[items];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <input onChange={changeHandler} />

      <div>
        <h2>{meaning}</h2>
        <h3>
          {emojis.map(function (items) {
            return (
              <span
                style={{
                  fontSize: "2rem",
                  padding: "0.5rem",
                  cursor: "pointer"
                }}
                key={items}
                onClick={function () {
                  ClickHandler(items);
                }}
              >
                {items}
              </span>
            );
          })}
        </h3>
      </div>
    </div>
  );
}
