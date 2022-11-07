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
  Default,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  freezeTableName: true,
  timestamps: true,
  underscored: true,
  paranoid: true,
  deletedAt: 'removedAt',
})
export class BaseEntity extends Model<BaseEntity, Partial<BaseEntity>> {
  @IsUUID(4)
  @PrimaryKey
  @Unique(true)
  @Default(UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  removedAt: Date;
}
