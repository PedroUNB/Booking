import {
  Table,
  Column,
  DataType,
  Unique,
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { ExerciseEntity } from 'src/modules/exercise/entities/exercise.entity';
import { ProfileEntity } from 'src/modules/profile/entities/profile.entity';
import { BaseEntity } from '../../bases/entities/base.entity';

@Table({
  tableName: 'file',
})
export class FileEntity extends BaseEntity {
  @Unique(false)
  @AllowNull(false)
  @Column(DataType.STRING)
  name!: string;

  @Unique(false)
  @AllowNull(false)
  @Column(DataType.STRING)
  url!: string;

  @HasOne(() => ProfileEntity)
  profile: ProfileEntity;

  @HasOne(() => ExerciseEntity)
  exercise: ExerciseEntity;
}
