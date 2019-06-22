import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './store';
import Card from './Card';

describe('Card component', () => {

  it ('render without issue', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it ('render without issue', () => {
    const div = document.createElement('div');
    const allCards = {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' }
    }
    ReactDOM.render(<Card title={allCards.a.title} content={allCards.a.content}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it ('render with data', () => {
    const cardIds = ['b', 'c', 'd', 'f', 'h', 'i', 'k'];

    const card = cardIds.map(x => STORE.allCards[x]);
    const tree = renderer
      .create(card.map(x => <Card title={x.title} content={x.content}/> ))
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
})