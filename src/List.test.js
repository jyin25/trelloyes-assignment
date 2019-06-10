import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import { isTSAnyKeyword } from '@babel/types';
import STORE from './store';

describe('List component', () => {
    it ('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cardIds={STORE.lists.cardIds} header={STORE.lists.header}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
});