import React from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import TableHeader from 'grommet/components/TableHeader';
import TableRows from './TableRows';
import $ from 'jquery';



export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
    this.UserList = this.UserList.bind(this);

    this.UserList();
  }

  componentDidMount() {
    this.UserList();
    // console.log('component mounted');
  }

  UserList() {
    return $.getJSON('https://jsonplaceholder.typicode.com/albums')
      .then((data) => {
        this.setState({ users: data });
        //console.log(this.state.users);
      });


  }

  render(){
    return(
      <Table>
        <TableHeader labels={['UserID', 'Title', 'ID']} />

          <TableRows userData={this.state.users} />

      </Table>

    );
  }
}
