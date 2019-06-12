import React from 'react';
import './App.css';
import List from './List';
import STORE from './store';

class App extends React.Component {
  

  render () {

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {STORE.lists.map(x => <List id={x.id} header={x.header} cardIds={x.cardIds}/>)}
        </div>
      </main>
    )
  }
}

export default App;
