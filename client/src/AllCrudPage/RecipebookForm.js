import axios from "axios";
import React from "react";
import { useContext, useState } from "react";





const RecipebookForm = (props) => {
    const [title, setTitle] = useState(props.title ? props.title : "")
    const [recipetype, setRecipetype] = useState(props.recipetype || "")

    const handleSubmit = (r) => {
        r.preventDefault();
        console.log({ title, recipetype })
        if (props.id) {
            props.updateRecipebook({ id: props.id, title, recipetype })
            console.log('update here')
            if (props.setShowUpdateForm) {
                props.setShowUpdateForm(false)
            }
        } else {
            props.addRecipebook({ title, recipetype })
            console.log('create new here', { title, recipetype })
        }
        setRecipetype('')
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{props.id ? 'edit' : 'add new'}Form.</h1>
                <p>Title</p>
                <input
                    value={title}
                    onChange={(r) => {
                        setTitle(r.target.value)
                    }}
                />
                <p>Type of Recipes</p>
                <input
                    value={recipetype}
                    onChange={(r) => {
                        setTitle(r.target.value)
                    }}
                />
                <button>{props.id ? 'update' : 'save'}</button>
            </form>
        </div>
    );

};
export default RecipebookForm;