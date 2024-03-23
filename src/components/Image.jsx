import { useState, useEffect } from "react"
import noteService from "../services/noteService"


const Image = () => {
    const [imageData, setImageData] = useState(null)

    useEffect(() => {
        const getImage = async () => {
            const response = await noteService.fetchImage()

            const base64Image = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                )
            )

            const imagedataUrl = `data:${response.headers["content-type"]};base64,${base64Image}`;
            setImageData(imagedataUrl)
           
        }
        getImage()
    }, [])

    return (
        <div>
            {imageData && <img src={imageData} alt="No image to display" />}
        </div>
    )
}

export default Image