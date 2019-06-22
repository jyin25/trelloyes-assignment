import React from 'react';
import App from './App';
import STORE from './store';
import Card from './Card'
import './List.css'

function List (props) {

  
    const x = props.cardIds.filter(ids => Object.keys(STORE.allCards).filter(keys => keys === ids));
    const matchingIds = x.map(ids => STORE.allCards[ids]);




    return (
        <section className="List">
          <header className="List-header">
            <h2>{props.header}</h2>
          </header>
          <div className="List-cards" id={props.ind}>
              {matchingIds.map((x, index)=> <Card title={x.title} listIndex={props.ind} content={x.content} id={index} onDelete={props.onDelete}/>)}
              <button type="button" className="List-add-button" id={props.ind} onClick={() => props.onAdd(props.ind)}>
                + Add Random Card
              </button>
          </div>
        </section>
    )
}

export default List;