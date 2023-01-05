import axios from "axios"

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID 9_vO-u6HIxnzRNoczHl0kIHivCd5v1HP5EDD_G2YEfg"
        },
        params: {
            query: term
        }
    })
    
    return response.data.results
}

export default searchImages