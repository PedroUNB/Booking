import { UUIDV4 } from 'sequelize';
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  IsUUID,
  DataType,
  CreatedAt,
  UpdatedAt,
  Unique,
  AllowNull,
  Default,
} from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  tableName: 'user',
  timestamps: true,
  underscored: true,
  paranoid: true,
  deletedAt: 'removedAt',
})
export class UserEntity extends Model<UserEntity, Partial<UserEntity>> {
  @IsUUID(4)
  @PrimaryKey
  @Unique(true)
  @Default(UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Unique(false)
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column(DataType.DATE)
  removedAt: Date;
}
