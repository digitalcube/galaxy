/** @jsxRuntime classic */
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
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
    <Styled.table {...getTableProps()}>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Styled.tr {...row.getRowProps()}>
              {row.cells.map((cell, i) => {
                if (i === 0) {
                  return (
                    <Styled.th {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </Styled.th>
                  );
                }
                return (
                  <Styled.td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </Styled.td>
                );
              })}
            </Styled.tr>
          );
        })}
      </tbody>
    </Styled.table>
  );
};
