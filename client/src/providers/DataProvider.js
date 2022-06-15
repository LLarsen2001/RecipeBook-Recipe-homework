import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataContext = React.createContext();

const DataProvider = (props) => {
    const [recipebooks, setRecipebooks] = useState([])

    useEffect(() => {
        getRecipebooks();
    }, []);

    const getRecipebooks = async () => {
        try {
            let res = await axios.get('/api/recipebooks')
            setRecipebooks(res.data)
        }
        catch (err) {
            alert('error has occured in the setRecipebooks')
        }
    }

    const updateRecipebook = async (recipebook) => {
        if (recipebook.title === "" || !recipebook.id) {
            alert('bad Book name');
            return;
        } try {
            let res = await axios.put(`/api/recipebooks/${recipebook.id}`, recipebook);
            let updatedRecipebook = recipebook.map((a) => a.id === res.data.id ? res.data : a);
            setRecipebooks(updatedRecipebook);
        } catch (err) {
            alert('error has occured in the updateRecipebook');
        }

    }

    return (
        <DataContext.Provider value={{ getRecipebooks, updateRecipebook }}>
            {props.children}
        </DataContext.Provider>
    );
}
export default DataProvider