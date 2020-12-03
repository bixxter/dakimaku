import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div>
            <h1>First push: "Islam lox"</h1>
            <h1>First push: "Asad pidar"</h1>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
