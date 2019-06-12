import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import { isTSAnyKeyword } from '@babel/types';
import STORE from './store';

describe('List component', () => {
    it ('render without crashing', () => {
        const div = document.createElement('div');
        const cardList = [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ];
        ReactDOM.render(<List cardIds={cardList}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const cardList = [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ];
        const tree = renderer
          .create(<List cardIds={cardList}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
      });
});