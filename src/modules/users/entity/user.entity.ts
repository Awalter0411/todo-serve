import { Common } from 'src/common/entity/common.entity';
import { Category } from 'src/modules/categories/entity/category.entity';
import { Todo } from 'src/modules/todos/entity/todo.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @VersionColumn()
  version: number;

  @Column('text')
  username: string;

  @Column('text')
  password: string;

  @Column('text')
  salt: string;

  @Column({
    select: false,
    default: false
  })
  isDelete: boolean;

  @Column({
    default: 3
  })
  // role[用户角色]: 0-超级管理员 | 1-管理员 | 2-开发&测试&运营 | 3-普通用户（只能查看）
  role: number;

  @OneToMany(() => Todo, todo => todo.user)
  todos: Todo[]

  @OneToMany(() => Category, category => category.user) 
  categories: Category[]
}
