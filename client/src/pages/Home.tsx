import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core';
import TodosTable from '../containers/TodosTable';

import { IStore } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import * as todoActions from '../redux/actions/todo/actions';
import Navbar from '../containers/Navbar';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        whiteSpace: 'nowrap'
    },
    form: {
        width: '100%',
        height: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column'
    },
    formWrapper: {
        marginBottom: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    demoWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.rem',
        fontWeight: 'bold',
        height: '100%',
        flexDirection: 'column'
    },
    todoListWrapper: {
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflowY: 'auto',
        padding: '16px',

        [theme.breakpoints.down('md')]: {
            width: ' 90%',
            padding: '0 6px 6px 6px'
        }
    },
    userLabel: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: '2rem'
    }
}));

const header = [
    { id: 'todo', label: 'Todo', minWidth: 320 },
    { id: 'createdOn', label: 'Created On', minWidth: 150 },
];

const Post = () => {
    const [newTodo, setNewTodo] = useState<string>('');

    const dispatch = useDispatch();

    const classes = useStyles();

    const todoState = useSelector((state: IStore) => state.todo);

    useEffect(() => {
        dispatch(todoActions.getAllTodos());
        return () => {
            dispatch(todoActions.clearTodos());
        };
    }, []);



    return (
      <>
          <div>
              <Navbar />
              <div style={{ height: '64px' }} />
              <div>
                  <TodosTable
                    isLoading={todoState.isLoading}
                    header={header}
                    data={todoState.todos}
                    stickyHeader={true}
                    placeHolder="Nothing to do"
                    headerStyle={{ background: '#b3b3b3' }}
                    rowStyle={{ color: '#b3b3b3', fontSize: '1.5rem' }}
                  />
              </div>
          </div>
      </>
    );
};

export default Post;
