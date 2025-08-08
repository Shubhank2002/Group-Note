import React, { useContext, useEffect, useState } from "react";
import "./Styles/SideBarStyles.css";
import { Data } from "../Context/UserContext";

const SideBar = ({ bool: { bool, setbool } }) => {
  const {
    show,
    setshow,
    NotesList,
    content,
    setcontent,
    allnotes,
    setallnotes,
  } = useContext(Data);

  const handleClick = (e) => {
    setshow({
      ...show,
      dialogue_box: true,
      sidebar: true,
    });

    localStorage.setItem("sidebar", JSON.stringify(true));
  };
  const handleClick2 = (item) => {
    const refresh_content={initials:item.grp_initials,colour:item.grp_colour,name:item.grp_name}
    localStorage.setItem('refresh_content',JSON.stringify(refresh_content))
    if(bool==false){
      setbool(!bool)
    }
    setcontent({
      ...content,
      initials: item.grp_initials,
      colour: item.grp_colour,
      name: item.grp_name,
    });
    if (item.grp_name === content.name) {
      const updated_bool = bool;
      setbool(!bool);
      localStorage.setItem("bool", JSON.stringify(!updated_bool));
    }
  };

  return (
    <div className="sidebar">
      <h1 id="heading1">Pocket Notes</h1>
      {show.sidebar && (
        <div className="middlecontent">
          {NotesList.length > 0 &&
            NotesList.map((item, index) => {
              return (
                <div
                  className="items"
                  key={index}
                  onClick={() => handleClick2(item)}
                  style={{backgroundColor:(content.name===item.grp_name)?'#D9D9D9':'white'}}
                >
                  <div
                    className="symbol"
                    style={{ backgroundColor: item.grp_colour }}
                  >
                    {item.grp_initials}
                  </div>
                  <p>{item.grp_name}</p>
                </div>
              );
            })}
        </div>
      )}
      <button onClick={handleClick} className="button">
        +
      </button>
    </div>
  );
};

export default SideBar;
