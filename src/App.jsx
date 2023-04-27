import { useState } from "react";
import data from "./data";
import Questions from "./Questions";
import "./App.css";

function App() {
  const [question, setQuestion] = useState(data);
  const [activeId, setActiveId] = useState(null);
  const toggleId = (id) => {
    const newActive = id === activeId ? null : id;
    setActiveId(newActive);
  };
  return (
    <main>
      <Questions question={question} activeId={activeId} toggleId={toggleId} />
    </main>
  );
}

export default App;
