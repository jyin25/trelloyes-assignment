import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import STORE from './store';

describe('App component', () => {
    it('render without issue', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App store={STORE}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });



});
