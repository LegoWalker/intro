import React from "react";

const Employee = (props) => {   // ({firstName, lastName, employeeAge:age}) => { 
    console.log(props);
    const { employeeId, firstName, lastName, employeeAge:age } = props;

    return (
        <React.Fragment>            
            <h6>
                Employee: { employeeId} {firstName} {lastName} - {age} years old
                {/* {`Employee Name: ${props.firstName} ${props.lastName}`}  */}    
            </h6>            
        </React.Fragment>
    )
}

export default Employee