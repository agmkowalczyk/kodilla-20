import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import getCountries from './actions/actions-countries';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        
       <DevTools />
    </Provider>,
    document.getElementById('root')
);
