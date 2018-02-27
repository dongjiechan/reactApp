import React from 'react';
import ReactDOM from 'react-dom';
// import { Route } from 'react-router';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom' 
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';
import App from './Index/App';
import demo1 from './demo1/demo1';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <div>
    <div>
      <Router>
      <ul role="nav">line
       <li><Link to="/">app</Link></li>
       <li><Link to="/demo1">demo1</Link></li>
      </ul>
      </Router>
     </div>
    </div>,document.getElementById('root'));
registerServiceWorker();
