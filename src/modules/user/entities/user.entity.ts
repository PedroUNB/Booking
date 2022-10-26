import {
  Table,
  Column,
  DataType,
  Unique,
  AllowNull,
} from 'sequelize-typescript';
import { BaseEntity } from '../../bases/entities/base.entity';

@Table({
  freezeTableName: true,
  tableName: 'user',
  timestamps: true,
  underscored: true,
  paranoid: true,
  deletedAt: 'removedAt',
})
export class UserEntity extends BaseEntity {
  @Unique(false)
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;
}
