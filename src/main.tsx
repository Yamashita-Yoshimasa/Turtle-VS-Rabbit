import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameStart from './screens/gamestart';
import Field from './screens/field';
import TrutleWin from "./screens/Trutle_win";
import RabbitWin from "./screens/Rabbit_win";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameStart} />
          <Route exact path="/field/" component={Field} />
          <Route exact path="/Trutle_win/" component={TrutleWin} />
          <Route exact path="/Rabbit_win/" component={RabbitWin} />
        </Switch>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('#app'));