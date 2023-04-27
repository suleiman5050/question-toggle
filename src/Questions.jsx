import React from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = ({ question, activeId, toggleId }) => {
  return (
    <section className="container">
      <h1>Questions</h1>

      {question.map((item) => {
        return (
          <SingleQuestion
            key={item.id}
            {...item}
            toggleId={toggleId}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
};

export default Questions;
