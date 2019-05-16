import React, { Component } from 'react';
import './App.css';
import Persons from './Persons/Persons'

class App extends Component {
state = {
  persons:[
    {name: 'Kati',title: 'designer', age: 28},
    {name: 'Mari',title: 'director', age: 29},
    {name: 'Marianne',title: 'engineer', age: 30}
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
inputNameHandler = event => {
  this.setState ({
    persons:[
      {name: 'Kati',title: 'designer', age: 28},
      {name: event.target.value, title: 'director', age: 29},
      {name: 'Marianne',title: 'engineer', age: 30}
    ]
  }  )
}

/*making card visible-invisible*/
togglePersonsHandler = () => {
  const checkToggle =this.state.showPersons;
  this.setState({
    showPersons: !checkToggle
  })
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

    return (
      <div>
        {this.state.showPersons ? <div className="allcards"><Persons
          click ={this.changeNameHandler.bind(this, 'Sandra')}
          name={this.state.persons[0].name}
          title={this.state.persons[0].title}
          age={this.state.persons[0].age} />

          <Persons
          click={() => this.changeNameHandler('Tiina')}
          name={this.state.persons[1].name}
          title={this.state.persons[1].title}
          age={this.state.persons[1].age}
          changed={this.inputNameHandler}
          />

        <Persons
        name={this.state.persons[2].name}
        title={this.state.persons[2].title}
        age={this.state.persons[2].age} /></div> : null }

<button style={buttonStyle} onClick={this.changeNameButtonHandler}>Push it</button>
<button onClick={this.togglePersonsHandler}>Invisible</button>
      </div>
    )
  }
};

export default App;
