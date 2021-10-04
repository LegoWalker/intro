import React from "react"
import { useHistory } from "react-router-dom";

const TodoCard = (props) => {
    //console.completed(todo);
    const {todo} = props;
    const {id, title, completed} = todo;
    let history = useHistory();

    return (   
        <div key={id} 
             style={{ 
                backgroundColor: "lightgrey",
                margin: "10px",
                padding: "10px",
                width: "200px"
              }}
              onClick={() => history.push(`/todo/${id}`)}>                     
            <h5> #{id}  </h5 >     
            <h4> {title} </h4>   
            <h6> {`Completed:  "${completed}"`} </h6>
        </div>
    );
};

export default TodoCard;