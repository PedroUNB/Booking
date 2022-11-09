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
import { BaseEntity } from '../../bases/entities/base.entity';

@Table({
  tableName: 'exercise',
})
export class ExerciseEntity extends BaseEntity {
  @Unique(false)
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @ForeignKey(() => FileEntity)
  @Column(DataType.UUID)
  fileId: string;

  @BelongsTo(() => FileEntity)
  file: FileEntity;
}
