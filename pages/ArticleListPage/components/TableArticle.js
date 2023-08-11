import React from "react";
import { Table, Button } from "reactstrap";

function TableArticle({ article }) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Article Name</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {article?.data?.map(function(data) {
          return (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td><Button color="primary">Detail</Button></td>
              <td><Button color="info">Update</Button></td>
              <td><Button color="danger">Hapus</Button></td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableArticle;