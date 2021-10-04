import React, { useState, useEffect } from 'react';
import axios from "axios";

const ToDoList = () => {
    const [todos, setTodos] = useState();

    useEffect(() => {
        //console.log("The use effect ran");
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
            const responseTodos = res.data;
            setTodos(responseTodos);
        });
    }, []);

    return (
        <div>
            <h3> ToDo List </h3>
            {todos && todos.map((todo) => {
                const { id, userId, title, completed } = todo;
                return (
                    <div key={id} >
                        <h5> {id}: {title} </h5>                        
                    </div>
                );
            })};
        </div>
    );
};

export default ToDoList;