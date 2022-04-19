import React, { FC } from 'react';
import {
  Paper,
  TableContainer,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { ITodoTable } from '../types';

const useStyles = makeStyles({
  root: {
    width: '100%',
    flex: 1,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  container: {
    maxHeight: '100%',
    scrollBehavior: 'smooth',
    overflow: 'auto'
  }
});
const TodosTable: FC<ITodoTable> = ({
  data,
  header,
  headerStyle,
  rowStyle,
  placeHolder,
  isLoading,
  stickyHeader = true
}) => {
  const classes = useStyles();
  let history = useHistory();

  const handleApplyRedirect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string, link: string) => {
    e.stopPropagation();
    window.location.assign(link);
  };

  const handleJobSelect = (id: string) => {
    history.push(`/jobs/${ id }`);
  };


  return (
    <div className="list-group mt-3 ">
      <h5 className="ml-2">Today's Jobs with Work Life Balance</h5>
      <p className="ml-2">(click each row to view details about the job)</p>
      <table className='table table-condensed'>
        <tbody>
        { data && data.sort((a, b) => a.id < b.id ? 1 : -1).map(job => {
          return (
            <tr
              //className={ job.color === '#fff9c9' ? 'highlight' : 'none' }
              onClick={ () => handleJobSelect(job.id) }
              key={ job.id }
            >
              <td>{ job.name }</td>
              <td>{ job.primary_tag }</td>
              <td>{ job.pay }</td>
              <td>
                <button
                  onClick={ (e) => handleApplyRedirect(e, job.id, job.link) }
                  className='btn btn-primary btn-sm'
                >Apply
                </button>
              </td>
            </tr>
          );
        }) }
        </tbody>
      </table>
    </div>
  )
    ;
};

export default TodosTable;
