import React from 'react';
import { Column, useTable } from 'react-table';
import { FC } from 'react';

export type TableProps = {
  nodes: Array<{
    [key: string]: string;
  }>;
  columns: Column<{
    [key: string]: string;
  }>[];
};

export const Table: FC<TableProps> = ({ nodes, columns }) => {
  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data: nodes,
  });

  return (
    <table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                if (i === 0) {
                  return (
                    <th {...cell.getCellProps()}>{cell.render('Cell')}</th>
                  );
                }
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
