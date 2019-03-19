import React from 'react';

const Form = props => {
    return (
            <form onSubmit={props.addHandler}>
            <input name="todo" placeholder="I need to..." value={props.textInput} onChange={props.inputHandler} />
            <button type="submit" onClick={props.addHandler}>Add</button>
            <button onClick={props.clearHandler}>Clear Completed</button>
            </form>
    )
}

export default Form;