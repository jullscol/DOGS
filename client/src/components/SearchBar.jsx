import React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { getNameBreed } from '../actions/index';

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value);
        console.log(name)
    }

    function handleSubmit (e){
        e.preventDefault()
        setCurrentPage(1);
        dispatch(getNameBreed(name));
    }

    return(
        <div>
            <input
            type = "text"
            placeholder = "Search..."
            onChange={(e) => handleInputChange(e)}
            />
            <button type='submit' onClick={(e)=> handleSubmit(e)}>Search</button>
        </div>
    )

}