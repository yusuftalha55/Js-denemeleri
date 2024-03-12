import React, { useContext } from "react";
import { ChangeBackGroundColor } from "../DarkModeToggleButton";

export default function Root() {
  const { BackGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);
  function changeButton() {
    if (BackGroundColor === "#faebd7") {
      setBackGroundColor("#404040");
    } else {
      setBackGroundColor("#faebd7");
    }
  }
  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
      <div className="active">
        <button
          onClick={changeButton}
          style={{
            height: 50,
            borderRadius: 15,
            boxShadow: "5px 3px 15px rgba(209, 1, 1, 0.5)",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
}
