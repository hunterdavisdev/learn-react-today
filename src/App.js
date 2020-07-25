import React, { useState, createContext } from "react";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("green");
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme, color: "white" }}>
      <CounterClass initialCount={0} />
      <CounterHooks initialCount={3} />
      <button
        onClick={() =>
          setTheme(prevTheme => (prevTheme === "red" ? "blue" : "red"))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
