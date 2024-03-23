import React, { useState, useEffect } from "react"
import noteService from "../services/noteService"



const Note = ({ note }) => {
    
    return <div>{note.note}</div>
  }



export default Note