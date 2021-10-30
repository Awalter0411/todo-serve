import { Common } from 'src/common/entity/common.entity';
import { Category } from 'src/modules/categories/entity/category.entity';
import {
  Column, 
  Entity,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Todo extends Common{
  // 内容
  @Column('text')
  content: string;

  // 状态
  // 0 代表不重要不紧急
  // 1 代表重要但不紧急
  // 2 代表不重要但紧急
  // 3 代表重要且紧急
  @Column({
    default: 0
  })
  status: number;

  @ManyToOne(() => Category, category => category.todos)
  category: number
}