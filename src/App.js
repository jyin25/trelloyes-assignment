import React from 'react';
import './App.css';
import List from './List';



class App extends React.Component {
  state = {
    list: this.props.store.lists,
    allcards: this.props.store.allCards
  }

  handleDelete = (cardIndx, listIndx) => {
    const newCard = this.state.list[listIndx].cardIds.filter((data, index) => index !== cardIndx);
    const newList = this.state.list.map((x, index) => {
      if (index === listIndx) {
        x.cardIds = newCard;
      }
      return x;
    });
    
    this.setState({
      list: newList
    })

  }


  randomCard () {
    const possible = Object.keys(this.state.allcards).join('');
    let newValue = possible.charAt(Math.floor(Math.random() * possible.length));
    return newValue;
  }

  handleAdd = (index) => {
    let newLetter = this.randomCard()
    const newList = this.state.list.map((data, indx) => {
      if (indx === index) {
        data.cardIds.push(newLetter);
      }
      return data
    })

    this.setState({
      list: newList
    })
  }


  //const newList = [...this.state.list]

//newList[index].cardIds.push(newLetter);
  
  render () {
    console.log(this.state.list)
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.list.map((x, index) => 
            <List
              ind = {index} 
              id={x.id} 
              header={x.header} 
              cardIds={x.cardIds}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}/>)}
        </div>
      </main>
    )
  }
}

export default App;
