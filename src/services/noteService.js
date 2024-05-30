import axios from 'axios';

const baseUrl = 'http://34.36.28.22';

const createNote = async (newNote) => {
  try {
    console.log(newNote, "Is MY NOTE")
    const response = await axios.post(`${baseUrl}/add`, newNote);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating new note:', error);
    throw error; // Re-throw the error to let the calling code handle it
  }
}

const isTaskDone = async (id) => {
  try {
    const response = await axios.put(`${baseUrl}/isDone/${id}`);
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error changing done status:', error);
    throw error; // Re-throw the error to let the calling code handle it
  }
}

const getAllNotes = async () => {
  try {
    const response = await axios.get(`${baseUrl}/getToDos`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching notes:', error);
    throw error; // Re-throw the error to let the calling code handle it
  }
}

const fetchImage = async () => {
    try{
        const response = await axios.get(`${baseUrl}/image`, {
            responseType: "arraybuffer"
        })
        return response
    } catch (error) {
        console.error("Error fetching image ", error)
    }
}

export default { createNote, getAllNotes, fetchImage, isTaskDone };
