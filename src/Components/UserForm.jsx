import React, { useContext, useState } from "react";
import "./Styles/UserFormStyles.css";
import { Data } from "../Context/UserContext";

const UserForm = () => {
  const { NotesList, setNotesList, show, setshow, allnotes, setallnotes } =
    useContext(Data);
  const [notes, setnotes] = useState({
    grp_name: "",
    grp_colour: "",
    grp_initials: "",
  });
  const isform=notes.grp_colour==='' && notes.grp_name.trim()===''
  const handleSubmit = (e) => {
    e.preventDefault();
    const exists=NotesList.find(item=>item.grp_name===notes.grp_name)
   
    if(!exists){
      const updated_list=[...NotesList,notes]
      setNotesList([
        ...NotesList,notes
      ])
      localStorage.setItem('notes_list',JSON.stringify(updated_list))
    }

    setshow({
      ...show,
      dialogue_box: false,
    });
    setnotes({ grp_name: "", grp_colour: "", grp_initials: "" });
    
  };
  const transformation = (value) => {
    return value
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "grp_name") {
      const initials = transformation(value);
      const new_value = capitalizeWords(value);
      setnotes({
        ...notes,
        [name]: new_value,
        grp_initials: initials,
      });
    } else {
      setnotes({
        ...notes,
        [name]: value,
      });
    }
  };
  const handleOverlayClick = () => {
    setshow({ ...show, dialogue_box: false });
  };
  function capitalizeWords(str) {
    return str
      .split(" ") // Split string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
      .join(" "); // Join words back into a string
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h1 id="heading2">Create New group</h1>

        <form onSubmit={handleSubmit} className="form">
          <div className="dialogue_box">
            <label htmlFor="" className="label">
              Group Name
            </label>
            <input
              type="text"
              style={{
                border: "1px solid wheat ",
                borderRadius: "15px",
                padding: "10px",
                marginLeft: "20px",
                marginRight: "10px",
                flexGrow: 1,
              }}
              className="group_name"
              required
              placeholder="Enter group name"
              name="grp_name"
              onChange={handleChange}
            />
          </div>
          <div className="colors">
            <label htmlFor="" className="label">
              Choose Colour
            </label>
            <div className="colorbox">
              <label
                htmlFor="B38BFA"
                className="color"
                style={{ backgroundColor: "#B38BFA",cursor:'pointer' }}
              ></label>
              <input
                type="radio"
                name="grp_colour"
                value="#B38BFA"
                required
                className="color-radio"
                onChange={handleChange}
                id="B38BFA"
              />
              <label
                htmlFor="FF66F0"
                className="color"
                style={{ backgroundColor: "#FF66F0",cursor:'pointer' }}
              ></label>
              <input
                type="radio"
                name="grp_colour"
                value="#FF66F0"
                className="color-radio"
                required
                onChange={handleChange}
                id="FF66F0"
              />
              <label
                htmlFor="43E6FC"
                className="color"
                style={{ backgroundColor: "#43E6FC",cursor:'pointer' }}
              ></label>
              <input
                type="radio"
                name="grp_colour"
                value="#43E6FC"
                required
                className="color-radio"
                onChange={handleChange}
                id="43E6FC"
              />
              <label
                htmlFor="F19576"
                className="color"
                style={{ backgroundColor: "#F19576",cursor:'pointer' }}
              ></label>
              <input
                type="radio"
                name="grp_colour"
                value="#F19576"
                required
                className="color-radio"
                onChange={handleChange}
                id="F19576"
              />
              <label
                htmlFor="0047FF"
                className="color"
                style={{ backgroundColor: "#0047FF",cursor:'pointer' }}
              ></label>
              <input
                type="radio"
                required
                name="grp_colour"
                value="#0047FF"
                className="color-radio"
                onChange={handleChange}
                id="0047FF"
              />
              <label
                htmlFor="6691FF"
                className="color"
                style={{ backgroundColor: "#6691FF",cursor:'pointer' }}
              ></label>
              <input
                type="radio"
                name="grp_colour"
                required
                value="#6691FF"
                className="color-radio"
                onChange={handleChange}
                id="6691FF"
              />
            </div>
          </div>
          <button type="submit" id="create" disabled={isform}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
