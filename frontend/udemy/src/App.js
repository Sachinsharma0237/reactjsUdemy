import React, { useState } from 'react';
import Person from './Person';

const App = (props) => {

    const [personState, setPersonState] = useState({
        persons:[
          { name: 'Sachin', age: 24},
          { name: 'Steve', age: 37},
          { name: 'Tony', age: 28}
        ],
        otherState:"Some other state"
    })

    const switchNameHandler = () =>{
      setPersonState({
        persons:[
          { name: 'Jack', age: 29},
          { name: 'Steve', age: 37},
          { name: 'Mark', age: 25}
        ]
      })
    }
    const nameChangeHandler = (event) =>{
      setPersonState({
        persons:[
          { name: event.target.value, age: 24},
          { name: 'Steve', age: 37},
          { name: 'Tony', age: 28}
        ]
      })
    }
    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px'
    };
  
    return ( <
              div className="app">
                <h1>Hi I'm React App</h1>
              <button
                style={style}
              onClick={switchNameHandler} >Switch Name</button>  
              <Person name={personState.persons[0].name} age={personState.persons[0].age}
                  changed={nameChangeHandler} />
              <br/>
              <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
              <br/>
              <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
              <br/>
    </div> );
}
 
export default App;