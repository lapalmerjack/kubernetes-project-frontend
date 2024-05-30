import { useState } from 'react'



// eslint-disable-next-line react/prop-types
const NoteFormInput = ({ value, onChange, inputName }) => (
    <div>
        {inputName}
        <input type="text"
        value={value}
        onChange={onChange} 
        />
        <button type="submit">create TODO</button>
    </div>
    

 )

 
// eslint-disable-next-line react/prop-types
const NoteForm = ({ createNote, styles }) => {

    const [note, setNote ] = useState('')

    const addNote = (event) => {
        event.preventDefault()
    
        const noteObject = {
            note: note,
            is_done: false,
        }
        console.log(noteObject)
        createNote(
            noteObject

        )
        setNote('')
    }

    const handleNoteChange = (event) => {
        setNote(event.target.value) }
    

    return (

    <div>
        <form style={styles} onSubmit={addNote}>
            <NoteFormInput value={note} onChange={handleNoteChange} />
        </form>
    </div>
    )
}


export default NoteForm
