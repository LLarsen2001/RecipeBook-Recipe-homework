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

    const addRecipebook = async (recipebook) => {
        if (!recipebook.title || recipebook.title === '') {
            alert('bad recipebook data')
            return
        }
        try {
            let res = await axios.post('/api/recipebooks', recipebook)
            setRecipebooks([res.data, ...recipebooks])
        }
        catch (err) {
            alert('error occured in the add recipebooks')
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

    const deleteRecipebook = async (id) => {
        try {
            await axios.delete(`/api/recipebooks/${id}`);
            setRecipebooks(recipebooks.filter((e) => e.id !== id))
        } catch (err) {
            alert('error has occured in the delete recipebook')
        }
    }

    return (
        <DataContext.Provider value={{ getRecipebooks, updateRecipebook, addRecipebook, deleteRecipebook }}>
            {props.children}
        </DataContext.Provider>
    );
};
export default DataProvider;