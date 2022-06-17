import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";

const RecipebookList = () => {
    const [recipebooks, setRecipebooks] = useState([]);

    const [show, setShow] = useState(false)

    useEffect(() => {
        getRecipebooks();
    }, []);


    const renderRecipebooks = () => {
        return recipebooks.map((c) => {
            return (
                <div className="component">
                    <h2>{c.title}</h2>
                    <p><b>Title:</b>{c.title}. <b>Type of Recipe:</b>{c.recipetype}.</p>
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
            <button onClick={() => setShow(!show)}>show</button>
            {show && (
                <>
                    {renderRecipebooks()}
                </>
            )}
        </div>
    );
};

export default RecipebookList