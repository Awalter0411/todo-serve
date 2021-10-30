import {
  Column, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn,
  CreateDateColumn,
  VersionColumn,
  Entity,
} from 'typeorm';

@Entity()
export class Todo {
  // 主键id
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn()
  createTime: Date

  // 更新时间
  @UpdateDateColumn()
  updateTime: Date

  // 软删除
  @Column({
    default: false,
    select: false,
  })
  isDelete: boolean

  // 更新次数
  @VersionColumn({
    select: false
  })
  version: number

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
}