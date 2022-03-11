import React, { FC } from 'react';
import { TableHead, TableRow, TableCell } from '@material-ui/core';
import { TodosTableHeader, HeaderStyle } from '../../types';

const TableHeader: FC<{
  data: TodosTableHeader[];
  headerStyle?: HeaderStyle;
}> = ({ data, headerStyle = {} }) => {
  return (
    <TableHead>
      <TableRow>
        {data.map((column, i) => (
          <TableCell
            key={i}
            align="left"
            style={{
              minWidth: column.minWidth,
              fontSize: '1.5rem',
              fontWeight: 600,
              height: '48px',
              background: '#d2c7a5',
              color: '#cfa73f',
              ...headerStyle
            }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
