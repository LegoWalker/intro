import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react"
import TodoCard from "./TodoCard";

const Todos = () => {
    const [todos, setTodos] = useState();
    
    useEffect(() => {
        //console.log("The use effect ran");
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {  
            //setTimeout(function() { console.log("Wait for 5 seconds"); } ,5000);        
            const responseTodos = res.data;            
            setTodos(responseTodos);
        });
    }, []);

    console.log(todos);    

    return (
        <>
            <br/>            
            
            { todos ? ( 
                <div style={{display: "flex", 
                             flexWrap: "wrap"}}>
                    { todos.slice(180,190).map((todo) => 
                    <TodoCard todo={todo}/>
                    )}   
                </div>    
              ) 
              : ( <CircularProgress/> ) 
            }
        </>
    );
};

export default Todos;