import axios from "axios"
import { useEffect, useState } from "react"


const RecipebookForm = () => {
    const [recipebooks, setRecipeBooks] = useState([])
    const [title, setTitle] = useState('')
    const [recipetype, setRType] = useState('')

    const addRecipeBook = (recipebook) => {
        setRecipeBooks([recipebook, ...recipebooks]);
    }

    const handleSubmit = async (r) => {
        r.preventDefault();
        console.log({ title, recipetype })
        try {
            let res = await axios.post('/api/recipebooks', { title, recipetype });
            addRecipeBook(res.data)
        } catch (err) {
            alert('problem with handleSubmit')
        }
    }

    const renderRecipebookForm = () => {
        return (
            <div className="something">
                <h2>Add new Recipe Book Form</h2>
                <form onSubmit={handleSubmit}>
                    <p>Title:</p>
                    <input value={title} onChange={(r) => setTitle(r.target.value)} />
                    <p>Type of Recipes</p>
                    <input value={recipetype} onChange={(r) => setRType(r.target.value)} />
                    <button>add new Recipe Book</button>
                </form>
            </div>
        )
    }

    return (
        <div>
            <h1>Recipe book Form</h1>
            <div>{renderRecipebookForm()}</div>
        </div>
    )
}

export default RecipebookForm