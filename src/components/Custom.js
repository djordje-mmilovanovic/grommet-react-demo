import React from "react";
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import TableHeader from 'grommet/components/TableHeader';



export default class MyForm extends React.Component {
  // constructor() {
  //   super();
  //   this.name = "Djordje";
  // }

  render(){
    return(
      <Table>
        <TableHeader labels={['Name', 'Last Name', 'Email', 'Address', 'Phone Number']} />
        <tbody>
          <TableRow>
            <td>
              Alan
            </td>
            <td>
              plays accordion
            </td>
          </TableRow>
          <TableRow>
            <td>
              Chris
            </td>
            <td>
              drops the mic
            </td>
          </TableRow>
          <TableRow>
            <td>
              Tracy
            </td>
            <td>
              travels the world
            </td>
          </TableRow>
        </tbody>
      </Table>

    );
  }
}
