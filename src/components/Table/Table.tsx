import React from 'react';
/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import { useTable } from 'react-table';
import { FC } from 'react';

export type Table = {
  nodes?: any;
};

export const Table: FC<Table> = ({ nodes }: Table) => {
  const data = React.useMemo(() => nodes, []);
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        accessor: 'col1',
      },
      {
        Header: 'Free',
        accessor: 'col2',
      },
      {
        Header: 'Tier 1',
        accessor: 'col3',
      },
      {
        Header: 'Tier 2',
        accessor: 'col4',
      },
      {
        Header: 'Tier 3',
        accessor: 'col5',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <>
      <Styled.table {...getTableProps()}>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
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
    </>
  );
};

Table.defaultProps = {
  nodes: [
    {
      col1: 'Plans',
      col2: 'Free',
      col3: 'Tier 1',
      col4: 'Tier 2',
      col5: 'Tier 3',
    },
    {
      col1: 'Sites',
      col2: '1',
      col3: '1',
      col4: '1',
      col5: '1',
    },
    {
      col1: 'Storage',
      col2: '500 MB',
      col3: '5 GB',
      col4: '50 GB',
      col5: '50 GB',
    },
  ],
};
