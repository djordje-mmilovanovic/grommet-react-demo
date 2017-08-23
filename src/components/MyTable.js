import React from 'react';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRows from './TableRows';

import { processStatus } from 'grommet/utils/Rest';

export default class MyTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentWillMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    let url = "https://jsonplaceholder.typicode.com/albums";
    this._getData(url);
  }

  _getData (url) {
    const options = { method: 'GET' };
    fetch(url, options)
    .then(processStatus)
    .then(response => response.json())
    .then(result => this.setState({ users: result }));
  }

  render(){
    return(
      <div className='table-holder'>
        <Table className='table-holder'>
          <TableHeader labels={['UserID', 'Title', 'ID']} />
          <TableRows userData={this.state.users} />
        </Table>
      </div>
    );
  }
}
