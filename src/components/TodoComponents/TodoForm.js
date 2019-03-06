import React from 'react';

const Form = props => {
    return (
            <form>
            <label for="item">Add to list: </label>
            <input name="todo" placeholder="Add item" value={props.textInput} onChange={props.inputHandler} />
            <button type="submit">Add</button>
            </form>
    )
}

export default Form;