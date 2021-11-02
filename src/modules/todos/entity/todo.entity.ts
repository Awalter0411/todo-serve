import { Common } from 'src/common/entity/common.entity';
import { Category } from 'src/modules/categories/entity/category.entity';
import { User } from 'src/modules/users/entity/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Todo extends Common {
  // 内容
  @Column('text')
  content: string;

  // 状态
  // 0 代表不重要不紧急
  // 1 代表重要但不紧急
  // 2 代表不重要但紧急
  // 3 代表重要且紧急
  @Column({
    default: 0,
  })
  status: number;

  @Column('date')
  startTime: Date;

  @Column('date')
  endTime: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  isFinished: boolean;

  @ManyToOne(() => Category, (category) => category.todos)
  category: number;

  @ManyToOne(() => User, (user) => user.todos)
  user: number;
}
