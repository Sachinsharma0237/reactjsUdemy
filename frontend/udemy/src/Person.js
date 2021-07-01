import React from 'react';
const Person = (props) =>{
    return (
        <div className="person">
        <p>Hi, I'm  {props.name}! and I'm {Math.floor(Math.random()*30)} year old and my real age is {props.age} </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person;