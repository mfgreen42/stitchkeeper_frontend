import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";

import "../pages/MyPatternsPage/MyPatternsPage.css";

const DeletePattern = (props) => {

const [ user, token ] = useAuth();
const [ deleted, setDeleted] = useState(false);


const deletePattern=async () => {
    try {
        let response = await axios.delete(`http://127.0.0.1:8000/api/patterns/update/${props.patternNumber}/`, {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        props.setPatterns(props.patterns.filter((pattern) => pattern.id !== props.patternNumber));
        setDeleted(true);
    } catch (error) {
        console.log(error.response)
    }
}

    return ( 
        <>
        {!deleted &&
        <button className="delete-button" onClick={deletePattern}>Delete Pattern</button>
}
        </>
        );
}
 
export default DeletePattern;
