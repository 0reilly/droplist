import { CSSProperties } from 'react';

export type Todo = {
  content: string;
  createdOn: Date;
  id: string;
  name: string;
  pay: number;
  description: string;
  link: string;
  primary_tag: string;
  color: string;
  position: string;
  price: number;
  billing: string;
};

export type TodosTableHeader = {
  id: string;
  label: string;
  minWidth: number;
};

export type AlertType = 'success' | 'info' | 'warning' | 'error' | undefined;

export type SnackBarAlert = {
  type: AlertType;
  msg: string;
};

export type HeaderStyle = CSSProperties;
export type RowStyle = CSSProperties;

export type Action = {
  type: string;
  payload: any;
};

export interface ITodoState {
  todos: Todo[];
  isLoading: boolean;
  err: any;
}

export interface IStore {
  todo: ITodoState;
  ui: IUiState;
}

export interface IUiState {
  snackbar: SnackBarAlert;
}

export interface ITodoTable {
  data: Todo[];
  header: TodosTableHeader[];
  stickyHeader: boolean;
  placeHolder?: string;
  headerStyle?: HeaderStyle;
  rowStyle?: RowStyle;
  isLoading: boolean;
}
