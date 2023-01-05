import "./components/GeneralStyles.css"
import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./api"

function App() {
    const [images, setImage] = useState([])

    const handleSubmit = async function (term) {
        const result = await searchImages(term)

        setImage(result)
        
    }

    return (
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images} />
        </div>
    )
}

export default App