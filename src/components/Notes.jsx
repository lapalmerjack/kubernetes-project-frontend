import React, { useState, useEffect } from "react"
import noteService from "../services/noteService"



const Note = ({ note, toggleDone }) => {

  const label = note.isDone ? 'done' : 'not done'
    
    return <div>{note.note}
    <button onClick={toggleDone}>{label}</button></div>
  }



export default Note