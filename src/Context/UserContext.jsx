import { createContext } from "react"
import { useState } from "react"
export const Data=createContext()

import React from 'react'


const UserContext = ({children}) => {
    const [show, setshow] = useState(()=>{
      const saved=localStorage.getItem('sidebar')
      return saved?{sidebar:JSON.parse(saved),dialogue_box:false}:{sidebar:false,dialogue_box:false}
    });
    const [NotesList,setNotesList]=useState(()=>{
      const saved=localStorage.getItem('notes_list')
      return saved?JSON.parse(saved):[]
    })
     const [content,setcontent]=useState(()=>{
      const saved=localStorage.getItem('refresh_content')
      return saved?JSON.parse(saved):{initials:'',name:'',colour:''}
     })
     const [allnotes,setallnotes]=useState(()=>{
      const saved=localStorage.getItem('refresh_notes')
      return saved?JSON.parse(saved):{}
     })

  return (
    <div>
      <Data.Provider value={{setshow,show,NotesList,setNotesList,content,setcontent,allnotes,setallnotes}}>
        {children}
      </Data.Provider>
    </div>
  )
}

export default UserContext


