import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import {Grid} from 'react-bootstrap';
import rootReducer from './reducers';
import Header from './containers/Header';
import Home from './containers/Home';
import PostContainer from './containers/PostContainer';
import PostFormContainer from './containers/PostFormContainer';

import { reducer as formReducer} from 'redux-form';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer,
  form: formReducer
  }),
  applyMiddleware(middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
   <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        {/* <Header/> */}
        <Switch>
          <Grid>
            <Route exact path="/" component={App}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/post/:id" component={PostContainer}/>
            <Route exact path="/postform" component={PostFormContainer} />
          </Grid>
        </Switch>
      </div>      
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();