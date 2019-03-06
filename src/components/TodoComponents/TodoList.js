// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const List = props => {
    return(
        <div>
            <p>{props.item.todo}</p>
        </div>
    )
}

export default List;