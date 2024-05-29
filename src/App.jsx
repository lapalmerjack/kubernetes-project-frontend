import NoteForm from "./form-components/noteForm"
import noteService from './services/noteService'
import Note from "./components/Notes"
import { useState , useEffect } from "react"
import Image from "./components/Image"

const App = () => {
  const [notes, setNotes] = useState([])
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    form: {
      textAlign: 'center'
    }
  }
  useEffect(() => {
    const getAllNotes = async () => {
        try {
            const data = await noteService.getAllNotes()
            setNotes(data)

        } catch (error) {
            console.error("Error fetching notes:", error)

        }
    }
    getAllNotes()
}, [])

  const createNote = async (noteObject) => {
   
    try {
      const returnedNote = await noteService.createNote(noteObject)
      console.log(returnedNote)
      setNotes(notes.concat(returnedNote))
    } catch(error) {
      console.error("Error creating new note: ", error)
    }
  }

  const toggleDoneOf = async (id)  => {
    const updatednote = await noteService.isTaskDone(id)
    setNotes(notes.map(n => n.id !== id ? n : updatednote))
    console.log('toggling done')
  }
 

  return (
    <div style={styles.container}>
      <Image />
       <NoteForm createNote={createNote} styles={styles.form} />
       {notes.map(
                note => <Note note={note} key={note.id} toggleDone={toggleDoneOf(note.id)}/>
            )}
    </div>
  )
}

export default App
