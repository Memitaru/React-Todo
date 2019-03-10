// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const List = props => {
    return(
        <div 
            onClick={()=>props.toggleHandler(props.item.id)}
            style={{
                textDecoration: props.item.complete ? 'line-through' : 'none',
              }}
        >
            <p>{props.item.todo}</p>
            
        </div>
    )
}

export default List;