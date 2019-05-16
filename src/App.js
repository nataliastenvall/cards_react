import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons'

class App extends Component {
state = {
  persons:[
    {name: 'Kati',title: 'designer', age: 28, id:'1'},
    {name: 'Mari',title: 'director', age: 29, id:'2'},
    {name: 'Marianne',title: 'engineer', age: 30, id:'3'},
    {name: 'Marianne',title: 'engineer', age: 30, id:'4'},
    {name: 'Marianne',title: 'engineer', age: 30, id:'5'}
  ],
  showPersons:false
};

/* click on the name area and names are changed */
changeNameHandler = (newName) => {
  this.setState({
    persons:[
      {name: newName,title: 'designer', age: 28},
      {name: 'Karmen',title: 'director', age: 29},
      {name: 'Karita',title: 'engineer', age: 30}
    ]
  })
}
/* click on the button and all names are changed */
changeNameButtonHandler = () => {
  this.setState({
    persons:[
      {name: 'Katri',title: 'designer', age: 28},
      {name: 'Karmen',title: 'director', age: 29},
      {name: 'Karita',title: 'engineer', age: 30}
    ]
  })
}

/* input name appearing on the card */
inputNameHandler = (event, id) => {
const personIndex = this.state.persons.findIndex(
  p => {
    return p.id === id;
      }
);
// choose the right person from array and spread
const person = {
  ...this.state.persons[personIndex]
};

person.name = event.target.value;

//spread again and put new name into array
const persons = [...this.state.persons];
persons[personIndex] = person;

//and finally we update the state
  this.setState ({
    persons: persons
  })
}

/*making card visible-invisible*/
togglePersonsHandler = () => {
  const checkToggle =this.state.showPersons;
  this.setState({
    showPersons: !checkToggle
  })
}
// click to the first card and remove items one by one
removeItemHandler = (personIndex) => {
const persons = [...this.state.persons];//spread operator, makes copy of array and divide it into pieaces
//const persons = this.state.persons.slice();//making the copy of the array before splicing
persons.splice(personIndex, 1);
this.setState({persons : persons});
}

  render (){
    const buttonStyle = {
      backgroundColor:" blue",
      padding: "10px",
      cursor: "pointer",
      color: "white",
      border: "none",
      borderRadius: "5px"
    }

    let personsIf = null;

    if(this.state.showPersons){
    personsIf = (
      <div className="allcards">

    {this.state.persons.map((p, index) => {
      return <Persons
      // p is a name of our function
      click={()=>this.removeItemHandler(index)}
      name={p.name}
      title={p.title}
      age={p.age}
      key={p.id} //key built-in in props, no need for extra mentioning
      changed={(event) => this.inputNameHandler(event, p.id)}
      />

    }

    )

    }
      </div>

)}
    return (
      <div>
      {personsIf}
      <button style={buttonStyle} onClick={this.changeNameButtonHandler}>Push it</button>
<button onClick={this.togglePersonsHandler}>Invisible</button>
      </div>
    )
  }
};

export default App;
