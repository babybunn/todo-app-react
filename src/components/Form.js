import React from "react";

const Form = ({setInputText, todos, setTodos, inputText}) => {
    const filterOptions = [
        'all',
        'completed',
        'uncompleted'
    ]

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitFormHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Date.now()
            }
        ]);
        setInputText("")
    }
    return (
        <div className="form">
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text" className="form-control" />
                <button onClick={submitFormHandler} type="submit">Add</button>
            </form>
            <ul className="filters">
            <li><strong>Selected Filter: </strong></li>
            {filterOptions.map((value, index) => {
                return <li className="filter-item" key={index}><input type="radio" name="filter" value={value} id={`input_filter_${value}`} /><label htmlFor={`input_filter_${value}`}>{value}</label></li>
            })}
            </ul>
        </div>
    )
}

export default Form;