import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";

const RecipebookList = () => {
    const [recipebooks, setRecipebooks] = useState([]);
    const [recipes, setRecipes] = useState([])
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        getRecipebooks();
    }, []);


    const renderRecipebooks = () => {
        return recipebooks.map((c) => {
            return (
                <div className="component">
                    <p>{c.title}</p>
                    <button onClick={() => setShow(!show)}>show</button>
                    {show && (
                        <>
                            <p><b>Title:</b>{c.title}. <b>Type of Recipe:</b>{c.recipetype}.</p>
                        </>
                    )}
                </div>
            );
        });
    };


    const getRecipebooks = async () => {
        try {
            let res = await axios.get("/api/recipebooks");
            setRecipebooks(res.data);
        } catch (err) {
            alert("err getRecipebooks occured");
        }
    };
    return (
        <div>
            <h1>Recipebook List</h1>
            {renderRecipebooks()}
        </div>
    );
};

export default RecipebookList