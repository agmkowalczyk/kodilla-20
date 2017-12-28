// App.js:
import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import DevTools from './DevTools';

class App extends Component {
 render() {<h1>Inicjalizacja projektu</h1>
   return (

     <Router history={hashHistory}>
       <Route path='/' component={Navigation}>
         <IndexRoute component={Home} />
         <Route path='/contact' component={Contact} />
         <Route path='/hello/:name' component={Hello} />
         <Route path='*' component={PageNotFound} />
       </Route>
       <DevTools />
     </Router>
   )
 }
}
const Home = () => <h1>Hej, tu Home component111</h1>
const Contact = () => <h1>A tu Contact component</h1>
const Navigation = props => (
    <div>
       <ul>
            <li><Link to="/" activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Home</Link></li>
            <li><Link to="/contact" activeStyle={{color: '#48abee'}} onlyActiveOnIndex>Contact</Link></li>
        </ul>
        {props.children}
    </div>
);
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;

export default App;