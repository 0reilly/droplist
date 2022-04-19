import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
} from 'typeorm';

@Entity('todos')
export class TodoEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  content: string;

  @CreateDateColumn()
  createdOn: Date;

  @Column({
    type: 'text',
    nullable: true,
  })
  color: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  name: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  pay: number;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  link: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  primary_tag: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  position: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  billing: string;
}
