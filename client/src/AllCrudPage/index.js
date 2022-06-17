import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
import RecipebookForm from "./RecipebookForm"




const AllCrudPage = () => {
    const { updateRecipebook, addRecipebook, getRecipebook } = useContext(DataContext)
    return (
        <div>
            <h1>Books of Recipes</h1>
            <RecipebookForm addRecipebook={addRecipebook} />


        </div>
    )
}

export default AllCrudPage