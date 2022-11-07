import {
  Table,
  Column,
  DataType,
  Unique,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { FileEntity } from 'src/modules/file/entities/file.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { BaseEntity } from '../../bases/entities/base.entity';

@Table({
  tableName: 'profile',
})
export class ProfileEntity extends BaseEntity {
  @Unique(false)
  @AllowNull(true)
  @Column(DataType.STRING)
  firstName!: string;

  @Unique(false)
  @AllowNull(true)
  @Column(DataType.STRING)
  lastName?: string;

  @Unique(false)
  @AllowNull(true)
  @Column(DataType.DATEONLY)
  bithDate?: string;

  @Unique(false)
  @AllowNull(true)
  @Column(DataType.FLOAT)
  weight?: number;

  @Unique(false)
  @AllowNull(true)
  @Column(DataType.FLOAT)
  height?: number;

  @ForeignKey(() => UserEntity)
  @Column(DataType.UUID)
  userId: string;

  @ForeignKey(() => FileEntity)
  @Column(DataType.UUID)
  fileId: string;

  @BelongsTo(() => UserEntity)
  user: UserEntity;

  @BelongsTo(() => FileEntity)
  file: FileEntity;
}
