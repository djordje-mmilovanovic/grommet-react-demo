import React from 'react';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRows from './TableRows';
import Request from 'superagent';



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
    Request.get(url).then((data) => {
      this.setState({
        users: data.body
      });
    });
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
