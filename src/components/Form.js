import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const Form = ({todos, setStatus, status}) => {
    const filterOptions = [
        'all',
        'completed',
        'incompleted'
    ]

    const dispatch = useDispatch()

    // states
    const [inputText, setInputText] = useState("");

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        if( inputText !== "" ) {
            dispatch( addTodo(
                {
                    text: inputText,
                }
            ))
        }
        setInputText("")
    }

    const filterHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className="form">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="form-control" />
                <button onClick={submitFormHandler} type="submit">Add</button>
            </form>
            <ul className="filters">
            <li className="filter-item"><strong>Selected Filter: </strong></li>
            {filterOptions.map((value, index) => {
                return <li className="filter-item" key={index}><input onChange={filterHandler} type="radio" name="filter" value={value} id={`input_filter_${value}`} checked={ value === status }/><label htmlFor={`input_filter_${value}`}>{value}</label></li>
            })}
            </ul>
        </div>
    )
}

export default Form;