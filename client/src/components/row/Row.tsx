import React, { FC } from 'react';
import { TableRow, TableCell, Checkbox, makeStyles } from '@material-ui/core';
import DeleteButton from '../delete-button/DeleteButton';
import { Todo, RowStyle } from '../../types';

const useStyles = makeStyles(() => ({
  contentTableCell: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.2rem'
  },
  content: {
    textDecoration: ({ completed }: any) => (completed ? 'line-through' : '')
  },
  deleteButtonWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

const Row: FC<{
  data: Todo;
  rowStyle?: RowStyle;
}> = ({ data, rowStyle = {} }) => {
  const { content, createdOn } = data;
  const classes = useStyles(false);

  return (
    <TableRow
      style={rowStyle}
      hover
      tabIndex={-1}
      key={`${data.id}_${content}`}
    >
      <TableCell className={classes.contentTableCell}>
        <div className={classes.content}>{content}</div>
      </TableCell>
      <TableCell>{new Date(createdOn).toLocaleString('eu')}</TableCell>
    </TableRow>
  );
};

export default Row;
