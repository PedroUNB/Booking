import {
  Table,
  Column,
  DataType,
  Unique,
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { BaseEntity } from '../../bases/entities/base.entity';

@Table({
  tableName: 'muscle-group',
})
export class MuscleGroupEntity extends BaseEntity {
  @Unique(false)
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
}
