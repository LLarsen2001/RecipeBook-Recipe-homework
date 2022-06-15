import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const RecipebookShow = () => {
    const [recipebook, Recipebook] = useState({})
    const [recipes, setRecipes] = useState([])
    const { id } = useParams()
    useEffect(() => {
        getRecipebookData()
    }, [])

    const getRecipebookData = async (id) => {
        try {
            let recipebookRes = await axios.get(`/api/recipebooks/${id}`)
            Recipebook(recipebookRes.data)
            let recipesRes = await axios.get(`/api/recipebooks/${id}/recipes`)
            setRecipes(recipesRes.data)
        } catch (err) {
            alert('error occured getting Data')
        }
    }
    return (
        <div>
            <h1>RecipebookShow</h1>
            <Link to='/recipebooks'>back to recipebooks</Link>
            <p>id: {id}</p>
            <p>Recipebook: {JSON.stringify(recipebook)}</p>
            <p>Recipes: {JSON.stringify(recipes)}</p>

        </div>
    )
}

export default RecipebookShow