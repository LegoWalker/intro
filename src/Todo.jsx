import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Todo = () => {
    const { id } = useParams();

    const [todoDetails, setTodoDetails] = useState();
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {  
            const responseTodo = res.data;            
            setTodoDetails(responseTodo);
        });
    }, []);    

    const {id: todoId, userId, title, completed} = todoDetails || {};

    return (
        <div>
            {todoDetails ? (
                <div>
                    <h1> {`Todo: #${todoId}`} </h1>
                    <h2> {`-----------------`} </h2>
                    <h2> {`${title}`} </h2>
                    <h2> {`UserId: ${userId}`} </h2>                    
                    <h2> {`Completed: ${completed}`} </h2>                    
                </div>
            ) : (
                <CircularProgress/>                
            )}
            
        </div>
    );
};

export default Todo;