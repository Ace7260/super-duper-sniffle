import React from "react";
import "./index.css";
import { Box } from "@mui/material";

export const Tableau = ({ data, handleDelete, handleEdit }) => {
  return (
    <table>
      <caption>Front-end web developer course 2024</caption>
      <thead>
        <tr>
          <th scope="col">Person</th>
          <th scope="col">Most interest in</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, key) => {
          return (
            <tr onDoubleClick={() => handleEdit(item)} id={key}>
              {" "}
              <th scope="row">{item.name}</th>
              <td>{item.interest}</td>
              <td>{item.age}</td>
              <td>
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleDelete(item)}
                >
                  DELETE{" "}
                </Box>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row" colSpan="2">
            All datas
          </th>
          <td>{data.length}</td>
        </tr>
      </tfoot>
    </table>
  );
};
