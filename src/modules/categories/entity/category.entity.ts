import { Common } from "src/common/entity/common.entity";
import { Todo } from "src/modules/todos/entity/todo.entity";
import { User } from "src/modules/users/entity/user.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Category extends Common{
  @Column('text')
  name: string;

  @OneToMany(() => Todo, todo => todo.category) 
  todos: Todo[]

  @ManyToOne(() => User, user => user.categories)
  user: number
}