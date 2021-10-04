import React from "react";

const Friends = (props) => {
    const {id, name, age: theirAge} = props;
    return (
      <div>            
        <h6>id: {id} <br/> Name: {name} <br/> Age: {theirAge}</h6>
      </div>
    )
    };

export default Friends;