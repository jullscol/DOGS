import React,{useState, useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { postDogs, getTemperaments } from '../actions/index';
import {useDispatch, useSelector} from "react-redux";

export default function DogCreate(){
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)

    const [input,setInput] = useState({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament:[]
    })
    
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        console.log(input)
    } 

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);
    return(
        <div>
            <Link to= '/home'><button>Back</button></Link>
            <h1>Created Breed</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                    type= "text"
                    value={input.name}
                    name="name"
                    onChnage={handleChange} 
                    />
                </div>
                <div>
                    <label>Height:</label>
                    <input
                    type= "text"
                    value={input.height}
                    name="height"
                    onChnage={handleChange} 
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                    type= "text"
                    value={input.weight}
                    name="weight"
                   onChnage={handleChange} 
                    />
                </div>
                <div>
                    <label>Life_span:</label>
                    <input
                    type= "text"
                    value={input.life_span}
                    name="life_span"
                    onChnage={handleChange}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                    type= "text"
                    value={input.image}
                    name="image"
                    onChnage={handleChange}
                    />
                </div>
                <select>
                  {temperaments.map((temp) =>(
                    <option value={temp.name}></option>
                  ))}
                </select> 

                <button type='submit'>Create Breed</button> 






            </form>


        </div>
    )
}