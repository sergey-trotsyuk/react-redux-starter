import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './features/home';
import Some from './features/some';
import Another from './features/another';

import App from './core/app';
import store from './store'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const AppWithProviders = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/some" component={Some} />
          <Route path="/another" component={Another} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<AppWithProviders />, document.getElementById('root'));
registerServiceWorker();
