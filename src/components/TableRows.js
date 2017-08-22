import React from "react";

export default class TableRows extends React.Component {
  render(){
    return(
        <tbody>
          {this.props.userData.map((user) => <tr key={user.id}><td>{user.userId}</td><td>{user.title}</td><td>{user.id}</td></tr>)}
        </tbody>
    );
  }
}
