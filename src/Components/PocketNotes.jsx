import React, { useContext, useState, useEffect } from "react";
import SideBar from "./SideBar";
import { Data } from "../Context/UserContext";
import "./Styles/PocketNotesStyles.css";
import UserForm from "./UserForm";
import Dashboard from "./Dashboard";
import Notes from "./Notes";

const PocketNotes = () => {
  const { show, setshow, content, setcontent } = useContext(Data);
  const [bool, setbool] = useState(() => {
    const saved = localStorage.getItem("bool");
    return saved ? JSON.parse(saved) : false;
  });
  const [isMobile, setisMobile] = useState(window.innerWidth <= 480);
  useEffect(() => {
    const handleResize = () => setisMobile(window.innerWidth <= 480);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main">
      {!isMobile || (isMobile && !bool) ? (
        <SideBar bool={{ bool, setbool }} />
      ) : null}

      {show.dialogue_box && (
        <div className="dialogue">
          <UserForm />
        </div>
      )}
      {bool ? (
        <Notes
          content={content}
          bool={bool}
          setbool={setbool}
          className="notes_section"
        />
      ) : (
        <Dashboard className="dashboard_section" />
      )}
    </div>
  );
};

export default PocketNotes;
