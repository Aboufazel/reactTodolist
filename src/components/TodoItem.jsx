import React from "react";

function TodoItem({id , title , discription}){
    return(
        <div style={{margin:25}}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>discription: {discription}</div>
        </div>
    )
}

export default TodoItem;