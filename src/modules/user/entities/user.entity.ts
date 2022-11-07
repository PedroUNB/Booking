import {
  Table,
  Column,
  DataType,
  Unique,
  AllowNull,
  BeforeUpdate,
  BeforeCreate,
  HasOne,
} from 'sequelize-typescript';
import { BaseEntity } from '../../bases/entities/base.entity';

import { genSaltSync, hash } from 'bcryptjs';
import { ProfileEntity } from 'src/modules/profile/entities/profile.entity';

@Table({
  tableName: 'user',
})
export class UserEntity extends BaseEntity {
  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING)
  email!: string;

  @Unique(false)
  @AllowNull(true)
  @Column(DataType.STRING)
  password?: string;

  @Unique(false)
  @AllowNull(true)
  @Column(DataType.BOOLEAN)
  isConfirmed?: boolean;

  @HasOne(() => ProfileEntity)
  profile: ProfileEntity;

  @BeforeUpdate
  @BeforeCreate
  static async hashPassword(user: UserEntity) {
    if (user.password && user.changed('password')) {
      const salt = genSaltSync(10);
      user.password = await hash(user.password, salt);
    }
  }
}
