import React from "react";
import $ from 'jquery';



export default class TableRows extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.UserList();
  //   // console.log('component mounted');
  // }

  // UserList() {
  //   return $.getJSON('https://jsonplaceholder.typicode.com/albums')
  //     .then((data) => {
  //       this.setState({ users: data });
  //       //console.log(this.state.users);
  //     });
  //
  //
  // }

  render(){
console.log(this.props.userData);
    return(
        <tbody>
          {this.props.userData.map((user) => <tr><td>{user.userId}</td><td>{user.title}</td><td>{user.id}</td></tr>)}
        </tbody>
    );
  }
}
