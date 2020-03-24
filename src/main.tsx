import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameStart from './screens/GameStart';
import Field from './screens/Field';
import TurtleWin from "./screens/Turtle_win";
import RabbitWin from "./screens/Rabbit_win";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameStart} />
          <Route exact path="/field/" component={Field} />
          <Route exact path="/Turtle_win/" component={TurtleWin} />
          <Route exact path="/Rabbit_win/" component={RabbitWin} />
        </Switch>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<App/>, document.querySelector('#app'));
