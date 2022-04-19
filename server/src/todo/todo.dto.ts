import { IsString, IsBoolean } from 'class-validator';

export class TodoDTO {
  @IsString()
  content: string;

  @IsBoolean()
  completed: boolean;
}

export type TodoSO = {
  id: string;
  createdOn: Date;
  name: string;
  pay: number;
  description: string;
  link: string;
  primary_tag: string;
  color: string;
  position: string;
  billing: string;
};
