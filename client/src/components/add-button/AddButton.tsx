import React, { FC, CSSProperties } from 'react';
import { Button, Typography } from '@material-ui/core';

const AddButton: FC<{
  style?: CSSProperties;
}> = ({ style = {} }) => {
  return (
    <Button
      type="submit"
      style={{
        background: '#cfa73f',
        color: '#d6cca9',
        padding: '1rem',
        fontSize: '1rem',
        fontWeight: 500,
        ...style
      }}
    >
      <Typography>ADD</Typography>
    </Button>
  );
};

export default AddButton;
