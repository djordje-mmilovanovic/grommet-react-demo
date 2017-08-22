import React from "react";
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import { NavLink } from 'react-router-dom';
import Menu from 'grommet/components/Menu';

export default class SidebarMenu extends React.Component {
  render(){
    return(
      <Sidebar colorIndex='neutral-1'>
        <Header pad='medium'
          justify='between'>
          <Title>
            Main Menu
          </Title>
        </Header>
        <Box flex='grow'
          justify='start'>
          <Menu primary={true}>
            <NavLink exact activeClassName="activeNav" to="/">
              Form
            </NavLink>
            <NavLink activeClassName="activeNav" to="/Table">
              Table
            </NavLink>
            <NavLink activeClassName="activeNav" to="/Custom">
              Custom
            </NavLink>
          </Menu>
        </Box>
      </Sidebar>
    );
  }
}
