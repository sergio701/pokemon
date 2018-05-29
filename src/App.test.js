import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('should return the initial cells state', () => {
        const app = mount(<App />);
        const instance = app.instance();
        expect(instance).toBeDefined();
    });
});
