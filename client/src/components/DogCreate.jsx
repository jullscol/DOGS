import React,{useState, useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import { postDogs, getTemperaments } from '../actions/index';
import {useDispatch, useSelector} from "react-redux";


function validate(input) {
    let errors = {};
    if(!input.name) {
        errors.name = "name is required"
    } else if (!input.weight){
        errors.weight = "weight is required";
    };
    return errors;
}

export default function DogCreate(){
    const dispatch = useDispatch() 
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments)
    const [errors,setErrors] = useState({});

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
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        })); 
        console.log(input)
    } 

    function handleSelect(e){
        setInput({
            ...input,
            temperament:[...input.temperament,e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postDogs(input))
        alert("Breed Create")
        setInput({
        name: "",
        height: "",
        weight: "",
        life_span: "",
        image: "",
        temperament:[]
        })
        history.push('/home')
    }

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);
    return(
        <div>
            <Link to= '/home'><button>Back</button></Link>
            <h1>Created Breed</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input
                    type= "text"
                    value={input.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                        <p>error</p>
                    )} 
                </div>
                <div>
                    <label>Height:</label>
                    <input
                    type= "text"
                    value={input.height}
                    name="height"
                    onChange={(e) => handleChange(e)} 
                    />
                </div>
                <div>
                    <label>Weight:</label>
                    <input
                    type= "text"
                    value={input.weight}
                    name="weight"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Life_span:</label>
                    <input
                    type= "text"
                    value={input.life_span}
                    name="life_span"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                    type= "text"
                    value={input.image}
                    name="image"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                <select onChange={(e) => handleSelect(e)}>
                  {temperaments.map((temp) =>(
                    <option value={temp.name}>{temp.name}</option>
                  ))}
                </select> 
                </div>
                <ul><li>{input.temperament.map(el=> el + " ,")}</li></ul>
                <button type='submit'>Create Breed</button> 






            </form>


        </div>
    )
}