import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import Modals from './modal';
import Paginate from './paginate';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
       <Route exact path="/modal" component={Modals} />
       <Route exact path="/pages" component={Paginate} />
       </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
