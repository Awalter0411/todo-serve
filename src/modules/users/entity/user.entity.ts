import { Common } from 'src/common/entity/common.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
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
}
