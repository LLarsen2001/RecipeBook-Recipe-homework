import { useContext, useState } from "react"
import { DataContext } from "../Providers/DataProvider";
import RecipebookForm from "./RecipebookForm";





const Recipebook = ({ id, title, recipetype }) => {
    // const [showForm, setShowForm] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const { updateRecipebook, deleteRecipebook } = useContext(DataContext);
    return (
        <div className='recipebook com'>
            <h5>
                {title}{' '}with {recipetype} meals
                <span
                    onClick={() => {
                        setShowUpdateForm(!showUpdateForm);
                    }}
                    className='sss'
                >
                    update
                </span>
                <span className="recipe comp"
                    onClick={() => deleteRecipebook(id)}>
                    x
                </span>
            </h5>
            {showUpdateForm && <Recipebook id={id} title={title} recipetype={recipetype} updateRecipebook={updateRecipebook} setShowUpdateForm={setShowUpdateForm} />}
        </div>
    )

};
export default Recipebook