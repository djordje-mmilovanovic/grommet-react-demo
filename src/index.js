import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/grommet-css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import MyTable from './components/MyTable';
import Custom from './components/Custom';
import SidebarMenu from "./components/SidebarMenu";
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import createBrowserHistory from 'history/lib/createBrowserHistory'

const history = createBrowserHistory();
const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <div>
      <Split flex='right'
        separator={true}
        showOnResponsive='both'
        className="sidebar-holder">
        <Box colorIndex='neutral-4'
          justify='center'
          align='center'
          pad='medium'>
            <SidebarMenu/>
        </Box>
        <Box colorIndex='neutral-7'
          justify='center'
          align='center'
          pad='medium'>
          <Route exact path="/" history={history} component={Form}/>
          <Route path="/Table" component={MyTable}/>
          <Route path="/Custom" component={Custom}/>
        </Box>
      </Split>
    </div>
  </Router>,
root);
