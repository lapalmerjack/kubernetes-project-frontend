import React, { useState, useEffect } from "react"
import noteService from "../services/noteService"



const Note = ({ note, toggleDone }) => {
  console.log(note, "is my note")

  const label = note.is_done ? 'done' : 'not done'
  console.log(note)
    
    return <div>{note.note}
    <button onClick={toggleDone}>{label}</button></div>
  }



export default Note