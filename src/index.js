import React from 'react'
import ReactDOM from 'react-dom'
import App from './container/App'
import './index.css'
// import 'babel-polyfill'
import Header from './components/header/Header'
import News from './components/news/News'
import RightMenu from './components/rightmenu/RightMenu'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Header} />
        <Route path='admin' component={News} />
        <Route path='genre' component={RightMenu} />
      </Route>
    </Router>,
    document.getElementById('root')
);
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/
