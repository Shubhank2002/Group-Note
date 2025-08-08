import React, { useContext, useEffect, useState } from "react";
import "./Styles/NotesStyles.css";
import { Data } from "../Context/UserContext";

const Notes = ({ content: { initials, name, colour },bool,setbool }) => {
  const [notes_list, setnotes_list] = useState([]);
  const { allnotes, setallnotes } = useContext(Data);
  const [input, setinput] = useState({});

  const handleClick = () => {
    const newnote = {
      ...input,
      createdAt: new Date().toISOString(),
    };
    setallnotes((prev) => {
      const existingarray = prev[name] || [];
      return {
        ...prev,
        [name]: [...existingarray, newnote],
      };
    });
    setinput({ text: "" });
  };
  useEffect(() => {
    localStorage.setItem("refresh_notes", JSON.stringify(allnotes));
  }, [allnotes]);
  const handleChange = (e) => {
    setinput({
      text: e.target.value,
    });
  };
  return (
    <div className="notes">
      <div>
        <div className="navbar">
          <button className="back_button" onClick={()=>setbool(!bool)}>←</button>
          <div className="icon" style={{ backgroundColor: colour }}>
            {initials}
          </div>
          <h1
            style={{
              fontSize: "24px",
              margin: "0px",
              color: "white",
              fontWeight: "normal",
            }}
          >
            {name}
          </h1>
        </div>
      </div>
      <div className="middle_box">
        {Array.isArray(allnotes[name]) &&
          allnotes[name].length > 0 &&
          allnotes[name].map((item, index) => {
            return (
              <div className="note_box" key={index}>
                <div>{item.text}</div>
                <div className="time">
                  <p>
                    {new Date(item.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <div className="small_circle"></div>
                  <p>
                    {new Date(item.createdAt).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="textarea">
        <textarea
          name=""
          id="textarea"
          placeholder="Enter your text here........"
          onChange={handleChange}
          value={input.text}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.text.trim() !== "") {
              e.preventDefault();

              handleClick();
            }
          }}
        ></textarea>
        <button id="add" disabled={!input.text} onClick={handleClick} >
          +
        </button>
      </div>
    </div>
  );
};

export default Notes;
