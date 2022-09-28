import React, { useState } from "react";
import "./ListItem.css";

function ListItem(props) {
  const [isDone, setIsDone] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [addNote, setAddNote] = useState("");

  function deleteItem() {
    setIsDone((value) => !value);
  }

  function markAndNote() {
    const question = prompt("איזו שאלה תרצה לשאול את אבא/ אמא?");
    setIsMarked((item) => !item);
    setAddNote(question);
  }

  return (
    <div className="listItemContainer">
      <li className="list-item">
        <span className="btns-list">
          <button className="btn-list btn-note" onClick={markAndNote}>
            יש לי שאלה{" "}
            <svg
              className="w-6 h-6 icon-question"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <button className="btn-list btn-done" onClick={deleteItem}>
            סיימתי עם הפריט{" "}
            <svg
              className="w-6 h-6 icon-check"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </span>
        <span
          className="item-string"
          style={{
            textDecoration: isDone ? "line-through" : "none",
            backgroundColor: isMarked ? "#ffecbb" : "none",
          }}
        >
          {props.item}
        </span>
        <span className="itemNote"> &nbsp; {addNote} &nbsp; </span>
      </li>
    </div>
  );
}

export default ListItem;
