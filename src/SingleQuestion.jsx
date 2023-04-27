import React from "react";

const SingleQuestion = ({ id, title, info, toggleId, activeId }) => {
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            toggleId(id);
          }}
        >
          {isActive ? `-` : `+`}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
